import liff from '@line/liff';
import { useEffect, useState } from 'react';
import { Member } from '../../response/member';

export const isMockMode = import.meta.env.VITE_LIFF_MOCK_MODE === 'true';
export const codeType = import.meta.env.VITE_LIFF_CODE_TYPE;

const liffId = import.meta.env.VITE_LIFF_ID;
const redirectUri = import.meta.env.VITE_LIFF_REDIRECT_URI;
const apiEndpoint = import.meta.env.VITE_LIFF_API_ENDPOINT;

export const fetchMember = async (idToken: string): Promise<Member> => {
  const response = await fetch(`${apiEndpoint}/api/members/${idToken}`);
  return await response.json();
};

export const useBarcode = () => {
  const [barcodeId, setBarcodeId] = useState('');

  useEffect(() => {
    getBarcodeId().then(setBarcodeId);
  }, []);

  return { barcodeId };
};

const initLiff = () =>
  liff.init({ liffId, mock: isMockMode }).then(() => {
    if (!liff.isLoggedIn()) {
      liff.login({ redirectUri });
    }
  });

const getBarcodeId = async (): Promise<string> => {
  await initLiff();

  // APIエンドポイント未指定の場合は固定値を返す
  if (!apiEndpoint) {
    return new Promise((resolve) => resolve('1928384898'));
  }

  const idToken = await liff.getIDToken();

  if (!idToken) {
    throw 'Can\'t get ID Token';
  }

  return fetchMember(idToken).then((member) => member.MemberId);
};
