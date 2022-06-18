import { FC } from 'react';
import { Barcode } from '../barcode';
import { Qrcode } from '../qrcode';

interface CodePropsInterface {
  value: string;
  type: 'barcode' | 'qrcode';
}

export const Code: FC<CodePropsInterface> = ({value, type}) => {
  return type === 'barcode' ? (
    <Barcode value={value}></Barcode>
  ) : (
    <Qrcode value={value}></Qrcode>
  );
};
