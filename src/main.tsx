import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { LiffProvider } from 'react-liff';

const isMockMode = import.meta.env.VITE_LIFF_MOCK_MODE === 'true';
console.debug({ isMockMode });
const liffId = import.meta.env.VITE_LIFF_ID;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <LiffProvider liffId={liffId} stubEnabled={isMockMode}>
        <App />
      </LiffProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
