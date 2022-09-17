import {
  Box,
  HStack,
  VStack,
  Icon,
  Text,
  Button,
  RadioGroup,
  Radio,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '../../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../../data/breadcrumbDatas';
import { FaRegStickyNote } from 'react-icons/fa';
import { useState } from 'react';
import { Claimed, StepHeader } from '../../../components/lostAndFound';

export const Step3 = () => {
  const [status, setStatus] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const backgroundColor = useColorModeValue('white', 'gray.800');
  return (
    <Box width={`100%`} height={`100%`}>
      <BreadcrumbNav orderedNavItems={LostandFoundPageBreadcrumbNav} />
      <VStack
        width={'100%'}
        borderRadius={`12px`}
        maxW={`1200`}
        margin={'0 auto'}
        marginTop={'1rem'}
        padding={['0 0.5rem', '0 1rem', '0 1.5rem', '0 4rem']}
        boxShadow={[`none`, `none`, `0px 0px 4px rgba(0,0,0,0.25)`]}
        backgroundColor={backgroundColor}
      >
        <StepHeader currentStep={3} completedSteps={[1, 2]} />
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
        <HStack
          justifyContent={'flex-end'}
          width={`100%`}
          alignItems={`baseline`}
          padding={'1rem 0'}
        >
          <Link to='/lost-and-found/add/2'>
            <Button backgroundColor={`#fff`} color={`#000`}>
              Back
            </Button>
          </Link>

          <Button colorScheme={'brand'} onClick={onOpen}>
            Submit
          </Button>

          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign={`center`}>Add item</ModalHeader>
              <ModalCloseButton />
              <ModalBody
                textAlign={`center`}
                justifyContent={`center`}
                alignItems={`center`}
              >
                <Text>It will be added</Text>
                <Icon
                  as={FaRegStickyNote}
                  height={`50px`}
                  width={`50px`}
                  my={`1.5rem`}
                />
              </ModalBody>

              <ModalFooter justifyContent={`center`} alignItems={`center`}>
                <Button backgroundColor={`white`} mr={3} onClick={onClose}>
                  Close
                </Button>
                <Link to='/lost-and-found'>
                  <Button color={`white`} backgroundColor={`#74C043`}>
                    Add Item
                  </Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </HStack>
      </VStack>
    </Box>
  );
};
