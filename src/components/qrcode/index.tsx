import { ReactNode } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QrcodePropsInterface {
  value: string;
}

export const Qrcode = (props: QrcodePropsInterface) => {
  return <QRCodeSVG value={props.value} />;
};
