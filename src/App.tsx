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
  const [error, setError] = useState('');
  // TODO: any を駆逐する
  // Profile は /node_modules/@liff/get-profile/lib/index.d.ts にあるけど、exportされてない？
  const [profile, setProfile] = useState<any>();
  const [barcodeId, setBarcodeId] = useState('');

  // TODO: hooksにしたい
  // 少なくともasync/awaitで書きたい
  useEffect(() => {
    liff
      .init({
        liffId,
        mock: isMockMode,
      })
      .then(() => {
        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri });
        }

        liff.getProfile().then(async (profile) => {
          console.log({ profile });
          setProfile(profile);

          if (isMockMode) {
            return setBarcodeId(profile.userId);
          }

          const member = await useMember(profile.userId);
          return setBarcodeId(member.barcode_id);
        });
      })
      .catch((e: Error) => {
        setError(`${e}`);
      });
  }, []);

  return (
    <div className="App">
      {profile?.userId ? (
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
