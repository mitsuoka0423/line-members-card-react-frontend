import { AspectRatio, Box, Skeleton } from '@chakra-ui/react';
import { Code } from '../code';

interface CardPropsInterface {
  value: string;
  type: 'barcode' | 'qrcode';
}

export const Card = (props: CardPropsInterface) => {
  return (
    <AspectRatio ratio={1.618 / 1}>
      <Box boxShadow="base" borderRadius="20px">
        {props.value ? (
          <Code type={props.type} value={props.value}></Code>
        ) : (
          <Skeleton width="50%" height="100px"></Skeleton>
        )}
      </Box>
    </AspectRatio>
  );
};
