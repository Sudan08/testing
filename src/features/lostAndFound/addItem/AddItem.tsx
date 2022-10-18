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
  useToast,
} from '@chakra-ui/react';

import BreadcrumbNav from '../../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../../data/breadcrumbDatas';
import { StepHeader } from '../../../components/lostAndFound';
import { Step1, Step2, Step3, stepperReducer, stepperState } from '.';
import { useReducer } from 'react';
import { FaRegStickyNote } from 'react-icons/fa';
import { ILostAndFound } from '../../../interfaces';
import {
  FieldErrorsImpl,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormWatch,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const initialStep: stepperState = {
  currentStep: 1,
  completedSteps: [],
};

export type stepPropType = {
  register: UseFormRegister<ILostAndFound>;
  handleSubmit: UseFormHandleSubmit<ILostAndFound>;
  errors: FieldErrorsImpl<ILostAndFound>;
  watch: UseFormWatch<ILostAndFound>;
};

export const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ILostAndFound>();
  const backgroundColor = useColorModeValue('white', 'gray.800');
  const [stepperStates, dispatch] = useReducer(stepperReducer, initialStep);
  const { isOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const handleAddItem = () => {
    toast({
      title: 'Your Item will be added soon',
    });
    navigate('/lost-and-found');
  };

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
        {stepperStates.currentStep === 1 && (
          <Step1
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            watch={watch}
          />
        )}
        {stepperStates.currentStep === 2 && (
          <Step2
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            watch={watch}
          />
        )}
        {stepperStates.currentStep === 3 && (
          <Step3
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            watch={watch}
          />
        )}
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
              <Button
                type={'button'}
                m={'1rem 0'}
                color={`#fff`}
                onClick={() => dispatch({ type: 'PREV' })}
                colorScheme={'blackAlpha'}
              >
                Back
              </Button>
            )}
            <Button
              m={'1rem 0'}
              color={`#fff`}
              colorScheme={'brand'}
              type={'button'}
              onClick={() => dispatch({ type: 'NEXT' })}
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
              type={'button'}
            >
              Back
            </Button>

            <Button
              type={'submit'}
              colorScheme={'brand'}
              onClick={handleSubmit(handleAddItem)}
            >
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
              <Text>One Item will be added!</Text>
              <Icon
                as={FaRegStickyNote}
                height={`50px`}
                width={`50px`}
                my={`1.5rem`}
              />
            </ModalBody>

            <ModalFooter
              width={'100%'}
              padding={'1rem 4rem'}
              justifyContent={`space-between`}
              alignItems={`center`}
            >
              <Button
                type={'button'}
                backgroundColor={`white`}
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button colorScheme={'brand'}>Add Item</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};
