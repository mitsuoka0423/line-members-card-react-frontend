import { useEffect, useState } from 'react';
import { Page } from './components/page';
import { Card } from './components/card';
import { useLiff } from 'react-liff';
import { useMember } from './hooks';

const redirectUri = import.meta.env.VITE_LIFF_REDIRECT_URI;

function App() {
  const {liff, isLoggedIn, ready} = useLiff();
  // TODO: any を駆逐する
  // Profile は /node_modules/@liff/get-profile/lib/index.d.ts にあるけど、exportされてない？
  const [barcodeId, setBarcodeId] = useState('');

  useEffect(() => {
    // if (!isLoggedIn) {
    //   liff.login(redirectUri);
    //   return;
    // }

    (async () => {
      const profile = await liff.getProfile();
      const member = await useMember(profile.userId);
      return setBarcodeId(member.barcode_id);
    })();
  }, []);

  return (
    <div className="App">
      {barcodeId ? (
        <Page>
          <Card barcodeId={barcodeId}></Card>
        </Page>
      ) : (
        '読込中'
      )}
    </div>
  );
}

export default App;
