import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Card } from '../card';
import { useBarcode } from './hooks';

const Page: FC = () => {
  const { barcodeId } = useBarcode();

  return (
    <div className="App">
      {barcodeId ? (
        <Box>
          <Card value={barcodeId} type="qrcode"></Card>
        </Box>
      ) : (
        '読込中'
      )}
    </div>
  );
}

export default Page;
