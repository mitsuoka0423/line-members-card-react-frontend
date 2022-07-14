import { FC } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QrcodePropsInterface {
  value: string;
}

export const Qrcode: FC<QrcodePropsInterface> = ({value}) => {
  return <QRCodeSVG value={value} />;
};
