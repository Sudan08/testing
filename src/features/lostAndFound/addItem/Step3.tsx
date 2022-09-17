import {
  Box,
  Text,
  RadioGroup,
  Radio,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Claimed } from '../../../components/lostAndFound';

export const Step3 = () => {
  const [status, setStatus] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box width={'100%'}>
        <Text>Step 3/3</Text>
        <Box my={`2rem`}>
          <Text as={`b`} fontSize={`1.3rem`}>
            What's the status of the item?
          </Text>
          <Text color={`grey`}>
            Please state wheather the item has been claimed or still pending
          </Text>
        </Box>

        <RadioGroup value={status} justifyContent={`flex-start`}>
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
              onClick={() => setStatus('Claimed')}
              cursor={'pointer'}
            >
              <Radio id={'claimedBtn'} value={`Claimed`}>
                Claimed
              </Radio>
            </Box>
            <Box
              border={`1px solid #DFDFDF`}
              px={`1rem`}
              py={`0.5rem`}
              w={`250px`}
              borderRadius={`5px`}
              onClick={() => setStatus('Pending')}
              cursor={'pointer'}
            >
              <Radio value={`Pending`}>Pending</Radio>
            </Box>
          </Flex>
        </RadioGroup>
        {status === 'Claimed' && <Claimed />}
      </Box>
    </>
  );
};
