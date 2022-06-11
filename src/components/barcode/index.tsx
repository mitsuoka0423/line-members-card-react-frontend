import { ReactNode } from 'react';
import { useBarcode } from 'react-barcodes';

interface BarcodePropsInterface {
  value: string;
}

export const Barcode = (props: BarcodePropsInterface) => {
  const barcode = useBarcode({ value: props.value });

  return <svg ref={barcode.inputRef} />;
};
