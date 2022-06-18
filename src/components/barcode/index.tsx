import { FC } from 'react';
import { useBarcode } from 'react-barcodes';

interface BarcodePropsInterface {
  value: string;
}

export const Barcode: FC<BarcodePropsInterface> = ({value}) => {
  const barcode = useBarcode({ value });

  return <svg ref={barcode.inputRef} />;
};
