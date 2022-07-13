import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { Card } from '../../components/card';
import { useBarcode, codeType } from './hooks';

const Page: FC = () => {
  const { barcodeId } = useBarcode();

  return (
    <>
      {barcodeId ? (
        <Box padding="40px">
          <Card value={barcodeId} type={codeType}></Card>
        </Box>
      ) : (
        '読込中'
      )}
    </>
  );
}

export default Page;
