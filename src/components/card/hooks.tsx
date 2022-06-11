import { ReactNode } from 'react';
import { Member } from '../../response/member';
import { Card } from './index';

export type UseCardResult = () => ReactNode;

export const useCard = async (userId: string): Promise<UseCardResult> => {
  const response = await fetch(`${import.meta.env.VITE_LIFF_API_ENDPOINT}/api/members/${userId}`);
  const member = (await response.json()) as Member;

  const renderCard = (): ReactNode => (
    <Card barcodeId={member.barcode_id}></Card>
  );


  return renderCard;
};
