import liff from '@line/liff';
import { useEffect, useState } from 'react';
import { Member } from '../../response/member';

export const isMockMode = import.meta.env.VITE_LIFF_MOCK_MODE === 'true';

const liffId = import.meta.env.VITE_LIFF_ID;
const redirectUri = import.meta.env.VITE_LIFF_REDIRECT_URI;

export const fetchMember = async (memberId: string): Promise<Member> => {
  const response = await fetch(`http://localhost:8000/api/members/${memberId}`);
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

  const profile = await liff.getProfile();

  // モックモードのときはAPIを叩かない
  if (isMockMode) {
    return new Promise((resolve) => resolve(profile.userId));
  }

  return fetchMember(profile.userId).then((member) => member.barcode_id);
};
