import { ReactNode } from 'react';
import { Barcode } from '../barcode';
import { Qrcode } from '../qrcode';

interface CodePropsInterface {
  value: string;
  type: 'barcode' | 'qrcode';
}

export const Code = (props: CodePropsInterface) => {
  return props.type === 'barcode' ? (
    <Barcode value={props.value}></Barcode>
  ) : (
    <Qrcode value={props.value}></Qrcode>
  );
};
