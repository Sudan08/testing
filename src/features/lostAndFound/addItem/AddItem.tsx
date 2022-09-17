import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Icon,
  ModalFooter,
} from '@chakra-ui/react';

import BreadcrumbNav from '../../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../../data/breadcrumbDatas';
import { Link } from 'react-router-dom';
import { StepHeader } from '../../../components/lostAndFound';
import { Step1, Step2, Step3, stepperReducer, stepperState } from '.';
import { useReducer } from 'react';
import { FaRegStickyNote } from 'react-icons/fa';

const initialStep: stepperState = {
  currentStep: 1,
  completedSteps: [],
};
export const AddItem = () => {
  const backgroundColor = useColorModeValue('white', 'gray.800');
  const [stepperStates, dispatch] = useReducer(stepperReducer, initialStep);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        minH={`80vh`}
      >
        <StepHeader {...stepperStates} />
        {stepperStates.currentStep === 1 && <Step1 />}
        {stepperStates.currentStep === 2 && <Step2 />}
        {stepperStates.currentStep === 3 && <Step3 />}
        {stepperStates.currentStep !== 3 && (
          <HStack
            alignItems={`baseline`}
            justifyContent={`flex-end`}
            width={`100%`}
            gap={'1rem'}
            padding={'1rem 0'}
            marginTop={'auto !important'}
          >
            {stepperStates.currentStep !== 1 && (
              <Button onClick={() => dispatch({ type: 'PREV' })}>Back</Button>
            )}
            <Button
              onClick={() => dispatch({ type: 'NEXT' })}
              m={'1rem 0'}
              color={`#fff`}
              colorScheme={'brand'}
            >
              Next
            </Button>
          </HStack>
        )}
        {stepperStates.currentStep === 3 && (
          <HStack
            justifyContent={'flex-end'}
            width={`100%`}
            alignItems={`baseline`}
            padding={'1rem 0'}
            marginTop={'auto !important'}
            gap={'1rem'}
          >
            <Button
              backgroundColor={`#fff`}
              onClick={() => dispatch({ type: 'PREV' })}
              color={`#000`}
            >
              Back
            </Button>

            <Button colorScheme={'brand'} onClick={onOpen}>
              Submit
            </Button>
          </HStack>
        )}
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
                <Button colorScheme={'brand'}>Add Item</Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};
