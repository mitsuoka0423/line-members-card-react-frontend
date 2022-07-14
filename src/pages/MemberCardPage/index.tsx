import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { MemberCard } from '../../components/domains/Member/MemberCard';
import { useBarcode, codeType } from './hooks';

const Page: FC = () => {
  const { barcodeId } = useBarcode();

  return (
    <Box padding="40px">
      {barcodeId ? <MemberCard value={barcodeId} type={codeType}></MemberCard> : '読込中'}
    </Box>
  );
};

export default Page;
