import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface PagePropsInterface {
  children: ReactNode;
}

export const Page = (props: PagePropsInterface) => {
  return (
    <Box padding="40px">{props.children}</Box>
  );
};
