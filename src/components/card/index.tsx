import { FC } from 'react';
import { AspectRatio, Box, Skeleton } from '@chakra-ui/react';
import { Code } from '../code';

interface CardPropsInterface {
  value: string;
  type: 'barcode' | 'qrcode';
}

export const Card: FC<CardPropsInterface> = ({value, type}) => {
  return (
    <AspectRatio ratio={1.618 / 1}>
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
