import { Heading, useColorModeValue } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

interface ICustomHeadingProp extends PropsWithChildren {
  color?: string;
  fontSize?: string | number;
}

const CustomHeading: React.FC<ICustomHeadingProp> = (props) => {
  const color = useColorModeValue('rgb(47, 72, 88)', 'white');
  return (
    <Heading
      fontSize={props.fontSize || '1.3rem'}
      color={color}
      textAlign={`center`}
    >
      {props.children}
    </Heading>
  );
};

export default CustomHeading;
