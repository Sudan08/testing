import { Checkbox, chakra, HStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
export type feedbackComponentType = {
  done: boolean;
  title: string;
  timestamp: {
    time: string;
    day: string;
    fullDate: string;
  };
  index?: number;
};

const FeedbackComponent: React.FC<feedbackComponentType> = ({
  done,
  title,
  timestamp,
  index,
}) => {
  const backgroundColor = useColorModeValue(
    `${((index || 0) + 1) % 2 === 0 ? '#FAFAFA' : '#fff'}`,
    'gray.800'
  );

  const textColor = useColorModeValue('#4B4E52', '#C4C8CC');

  return (
    <HStack
      gap={'0.5rem'}
      width={'100%'}
      justifyContent={'flex-start'}
      padding={'1rem'}
      backgroundColor={backgroundColor}
    >
      <Checkbox
        width={'50px'}
        colorScheme={'brand'}
        flexGrow={1}
        backgroundColor={'rgba(0,0,0,0)'}
        defaultChecked={done}
        iconSize={'24px'}
        size={'lg'}
        boxSize={'24px'}
        fill={'none'}
        alignItems={'center'}
        height={'100%'}
        justifyContent={'center'}
      />
      <chakra.span
        fontSize={'1rem'}
        color={textColor}
        whiteSpace={'nowrap'}
        overflow={'hidden'}
        overflowX={{ sm: 'scroll', md: 'hidden' }}
        fontWeight={'medium'}
        width={'100%'}
        padding={'0.5rem'}
        flexGrow={8}
      >
        {title.slice(0, 120)}
      </chakra.span>
      <chakra.span
        fontSize={'0.8rem'}
        fontWeight={'semibold'}
        color={'gray.500'}
        width={'100px'}
        flexGrow={1}
      >
        {timestamp['time']}
      </chakra.span>
    </HStack>
  );
};

export default FeedbackComponent;
