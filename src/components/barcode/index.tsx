import { useBarcode } from 'react-barcodes';

interface BarcodePropsInterface {
  id: string;
}

export const Barcode = (props: BarcodePropsInterface) => {
  const barcode = useBarcode({ value: props.id });

  return <svg ref={barcode.inputRef} />;
};
