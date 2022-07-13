import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import liff from '@line/liff';
import { LiffMockPlugin } from '@line/liff-mock';
import MembersCard from './pages/MembersCard';

export const isMockMode = import.meta.env.VITE_LIFF_MOCK_MODE === 'true';

if (isMockMode) {
  console.log('mock mode');
  liff.use(new LiffMockPlugin());
}

const App = () => (
  <React.StrictMode>
    <ChakraProvider>
      <MembersCard />
    </ChakraProvider>
  </React.StrictMode>
);

export default App;
