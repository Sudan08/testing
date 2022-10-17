import {
  Box,
  Button,
  chakra,
  Divider,
  FormControl,
  HStack,
  Input,
  Select,
  useColorModeValue,
  VStack,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Person } from 'akar-icons';
import { useNavigate } from 'react-router-dom';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';
import { addStudentPageBreadcrumbNav } from '../../data/breadcrumbDatas';
import { useForm } from 'react-hook-form';
import { IStudent } from '../../interfaces';

const StudentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IStudent>();
  const handleViewStudent = (_: IStudent) => {
    navigate('/view-students');
  };
  const navigate = useNavigate();
  const backgroundColor = useColorModeValue('#F9F9F9', 'gray.800');
  return (
    <Box width={`100%`} height={`100%`}>
      <BreadcrumbNav orderedNavItems={addStudentPageBreadcrumbNav} />
      <VStack width={`100%`} height={`100%`} justifyContent={'center'}>
        <VStack
          width={'100%'}
          maxW={'597px'}
          boxShadow={`0px 0px 24px rgba(0,0,0,0.3)`}
          borderRadius={'8px'}
          backgroundColor={backgroundColor}
        >
          <HStack
            gap={'0.5rem'}
            width={`100%`}
            padding={'1.8rem 0rem'}
            justifyContent={'center'}
          >
            <Person color={'#69B01C'} />
            <CustomHeading>Students Viewer</CustomHeading>
          </HStack>
          <Divider />
          <chakra.form
            width={'100%'}
            padding={'3rem'}
            paddingTop={'2rem'}
            onSubmit={handleSubmit(handleViewStudent)}
          >
            <FormControl isInvalid={Boolean(errors.course)}>
              <FormLabel htmlFor="course">Course</FormLabel>
              <Select
                placeholder="Course"
                id="course"
                {...register('course', {
                  required: 'Course is required',
                })}
              >
                <option value={'BIBM'}>BIBM</option>
                <option value={'BIT'}>BIT</option>
              </Select>
              <FormErrorMessage>
                {errors.course && errors.course.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl marginTop={'1rem'} isInvalid={Boolean(errors.level)}>
              <FormLabel htmlFor="level" fontWeight={'semibold'}>
                Level
              </FormLabel>
              <Input
                id="level"
                placeholder="Enter/Select Level"
                backgroundColor={'blackAlpha.50'}
                borderRadius={'4px'}
                list={'level_list'}
                marginTop={'0.5rem'}
                {...register('level', {
                  required: 'Level is required',
                })}
              />

              <datalist id="level_list">
                <option value="1"></option>
                <option value="2"></option>
              </datalist>
              <FormErrorMessage>
                {errors.level && errors.level.message}
              </FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              display={'block'}
              color="white"
              _hover={{
                backgroundColor: `brand.700`,
              }}
              backgroundColor="brand.500"
              width={'100%'}
              marginTop={'2rem'}
            // onClick={() => {
            // navigate('/view-students');
            // }}
            >
              View Students
            </Button>
          </chakra.form>
        </VStack>
      </VStack>
    </Box>
  );
};

export default StudentPage;
