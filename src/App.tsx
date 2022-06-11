import { useEffect, useState } from 'react';
import { Page } from './components/page';
import { Card } from './components/card';
// TODO: カッコよくhooksにしたい
// import { useProfile } from './hooks';
import liff from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';
import { useMember } from './hooks';

const isMockMode = import.meta.env.VITE_LIFF_MOCK_MODE === 'true';
const liffId = import.meta.env.VITE_LIFF_ID;
const redirectUri = import.meta.env.VITE_LIFF_REDIRECT_URI;

if (isMockMode) {
  console.log('mock mode');
  liff.use(new LiffMockPlugin());
}

function App() {
  const [barcodeId, setBarcodeId] = useState('');

  // TODO: hooksにしたい
  useEffect(() => {
    (async () => {
      await liff.init({
        liffId,
        mock: isMockMode,
      });

      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri });
      }

      const profile = await liff.getProfile();

      // モックモードのときはAPIを叩かない
      if (isMockMode) {
        return setBarcodeId(profile.userId);
      }

      const member = await useMember(profile.userId);
      return setBarcodeId(member.barcode_id);
    })();
  }, []);

  return (
    <div className="App">
      {barcodeId ? (
        <Page>
          <Card value={barcodeId} type="qrcode"></Card>
        </Page>
      ) : (
        '読込中'
      )}
    </div>
  );
}

export default App;
