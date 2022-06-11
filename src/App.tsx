import { useEffect, useState } from 'react';
import { Page } from './components/page';
// TODO: カッコよくhooksにしたい
// import { useProfile } from './hooks';
import liff from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';
import { useCard, UseCardResult } from './components/card/hooks';

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
  const [renderCard, setRenderCard] = useState<UseCardResult>();

  // TODO: hooksにしたい
  useEffect(() => {
    liff
      .init({
        liffId,
        mock: isMockMode,
      })
      .then(async () => {
        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri });
        }

        const profile = await liff.getProfile().catch((e: Error) => {
          setError(`${e}`);
          throw e;
        });

        const renderCard = await useCard(profile.userId);
        setRenderCard(renderCard);
        console.log(renderCard);
      });
  }, []);

  return (
    <div className="App">
      {renderCard ? (
        <Page>
          {renderCard()}
        </Page>
      ) : (
        '読込中'
      )}
    </div>
  );
}

export default App;
