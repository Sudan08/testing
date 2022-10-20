import {
  Box,
  HStack,
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Icon,
  Center,
  Grid,
  FormErrorMessage,
} from '@chakra-ui/react';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiCheckboxCircleLine,
} from 'react-icons/ri';
import { stepPropType } from '../../features/lostAndFound/addItem';

const Claimed: React.FC<stepPropType> = ({ register, errors }) => {
  return (
    <Box>
      <Box my={`2rem`}>
        <Text as={`b`} fontSize={`1.3rem`}>
          Claim Details
        </Text>
      </Box>
      <Grid
        gap={['1rem', '2rem', '3rem']}
        gridTemplateColumns={`repeat(auto-fit, minmax(250px, 1fr))`}
      >
        <FormControl isInvalid={Boolean(errors?.receiversName)}>
          <FormLabel htmlFor="Recieved by" fontWeight={'semibold'}>
            Item Name
          </FormLabel>
          <Input
            id="recievedby"
            placeholder="Enter/Select Item Name"
            {...register('receiversName', {
              required: 'Item Name is required',
            })}
          />
          <FormErrorMessage>
            {errors.receiversName && errors.receiversName.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.level)}>
          <FormLabel htmlFor="Level">Level</FormLabel>
          <Select {...register('level', { required: 'Level is required' })}>
            <option value="" disabled hidden selected>
              Select Level
            </option>
            <option>Level 4</option>
            <option>Level 5</option>
            <option>Level 6</option>
          </Select>
          <FormErrorMessage>
            {errors.level && errors.level.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.group)}>
          <FormLabel>Group</FormLabel>
          <Select {...register('group', { required: 'Group is required' })}>
            <option value="" disabled hidden selected>
              Select Group
            </option>
            <option>LGCG7</option>
            <option>LGCG6</option>
            <option>LGCG5</option>
          </Select>
          <FormErrorMessage>
            {errors.group && errors.group.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.semester)}>
          <FormLabel>Semester</FormLabel>
          <Select
            {...register('semester', { required: 'Semester is required' })}
          >
            <option value="" disabled hidden selected>
              Select Semester
            </option>
            <option>1</option>
            <option>2</option>
          </Select>
          <FormErrorMessage>
            {errors.semester && errors.semester.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.course)}>
          <FormLabel>Course</FormLabel>
          <Select {...register('course', { required: 'Course is required' })}>
            <option value="" disabled hidden selected>
              Select Course
            </option>
            <option>BIBM</option>
            <option>MBA</option>
          </Select>
          <FormErrorMessage>
            {errors.course && errors.course.message}
          </FormErrorMessage>
        </FormControl>
      </Grid>

      {/* <Box
        pt={`1rem`}
        maxWidth={'320px'}
        width={['100%', '100%', '45%', '45%']}
        alignItems={`baseline`}
        justifyContent={`flex-start`}
        paddingTop={'4rem'}
      >
        <Text borderTop={'3px solid black'} textAlign={`center`}>
          Receiver's Digital signature
        </Text>
      </Box> */}
    </Box>
  );
};

interface IStepHeaderProps {
  completedSteps?: number[];
  currentStep: number;
}
interface INumberIndicatorProps extends IStepHeaderProps {
  stepNumber: number;
  stepTitle: string;
}
export const NumberIndicator: React.FC<INumberIndicatorProps> = ({
  completedSteps,
  currentStep,
  stepNumber,
  stepTitle,
}) => {
  return (
    <HStack alignItems={`center`} justifyContent={`center`}>
      {completedSteps?.includes(stepNumber) && currentStep !== stepNumber ? (
        <Icon
          as={RiCheckboxCircleLine}
          color={`#74C043`}
          borderRadius={`100%`}
          mx={`0.33wrem`}
          height={`30px`}
          width={`30px`}
        />
      ) : (
        <Icon
          as={
            stepNumber === 1
              ? RiNumber1
              : stepNumber === 2
              ? RiNumber2
              : RiNumber3
          }
          backgroundColor={currentStep === stepNumber ? `#74C043` : `#606A72`}
          padding={`5px`}
          color={`#fff`}
          borderRadius={`100%`}
          mx={`0.33wrem`}
          height={[`25px`, `30px`]}
          width={[`25px`, `30px`]}
        />
      )}

      <Center fontSize={['0.8rem', '1rem']}>{stepTitle}</Center>
    </HStack>
  );
};
const steps = ['Item Details', 'Found Details', 'Item Status'];
export const StepHeader: React.FC<IStepHeaderProps> = ({
  completedSteps,
  currentStep,
}) => {
  return (
    <HStack
      width={'100%'}
      alignItems={'center'}
      justifyContent={'space-between'}
      my={`2rem`}
    >
      {steps.map((step, index) => (
        <NumberIndicator
          key={index}
          stepTitle={step}
          completedSteps={completedSteps}
          currentStep={currentStep}
          stepNumber={index + 1}
        />
      ))}
    </HStack>
  );
};
export default Claimed;
