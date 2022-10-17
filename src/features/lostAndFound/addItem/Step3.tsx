import { Box, Text, RadioGroup, Radio, Flex } from '@chakra-ui/react';
import { Claimed } from '../../../components/lostAndFound';
import { stepPropType } from './AddItem';

export const Step3: React.FC<stepPropType> = () => {
  return (
    <>
      <Box width={'100%'}>
        <Text>Step 3/3</Text>
        <Box my={`2rem`}>
          <Text as={`b`} fontSize={`1.3rem`}>
            What&apos;s the status of the item?
          </Text>
          <Text color={`grey`}>
            Please state wheather the item has been claimed or still pending
          </Text>
        </Box>

        <RadioGroup
          value={formState.status}
          onChange={(value) =>
            dispatchFormAction({ type: 'SET_STATUS', payload: value })
          }
          justifyContent={`flex-start`}
        >
          <Flex
            flexDirection={['column', 'column', 'row']}
            gap={['0.5rem', '1rem', '2rem']}
            width={'100%'}
          >
            <Box
              border={`1px solid #DFDFDF`}
              px={`1rem`}
              py={`0.5rem`}
              w={`250px`}
              borderRadius={`5px`}
              onClick={() =>
                dispatchFormAction({ type: 'SET_STATUS', payload: 'CLAIMED' })
              }
              cursor={'pointer'}
            >
              <Radio id={'claimedBtn'} value={`CLAIMED`}>
                Claimed
              </Radio>
            </Box>
            <Box
              border={`1px solid #DFDFDF`}
              px={`1rem`}
              py={`0.5rem`}
              w={`250px`}
              borderRadius={`5px`}
              onClick={() =>
                dispatchFormAction({ type: 'SET_STATUS', payload: 'PENDING' })
              }
              cursor={'pointer'}
            >
              <Radio value={`PENDING`}>Pending</Radio>
            </Box>
          </Flex>
        </RadioGroup>
        {formState.status === 'CLAIMED' && (
          <Claimed
            formState={formState}
            dispatchFormAction={dispatchFormAction}
          />
        )}
      </Box>
    </>
  );
};
