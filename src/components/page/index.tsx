import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Card } from '../card';
import { useBarcode, codeType } from './hooks';

const Page: FC = () => {
  const { barcodeId } = useBarcode();

  return (
    <div className="App">
      {barcodeId ? (
        <Box padding="40px">
          <Card value={barcodeId} type={codeType}></Card>
        </Box>
      ) : (
        '読込中'
      )}
    </div>
  );
}

export default Page;
