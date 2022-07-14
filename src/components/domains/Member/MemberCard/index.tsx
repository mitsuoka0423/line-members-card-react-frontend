import { FC } from 'react';
import { AspectRatio, Box, Skeleton } from '@chakra-ui/react';
import { Code } from '../../../ui/code';

interface MemberCardPropsInterface {
  value: string;
  type: 'barcode' | 'qrcode';
}

export const MemberCard: FC<MemberCardPropsInterface> = ({value, type}) => {
  return (
    <AspectRatio ratio={1.618 / 1} maxWidth="400px">
      <Box boxShadow="base" borderRadius="20px">
        {value ? (
          <Code type={type} value={value}></Code>
        ) : (
          <Skeleton width="50%" height="100px"></Skeleton>
        )}
      </Box>
    </AspectRatio>
  );
};
