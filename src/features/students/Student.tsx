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
} from '@chakra-ui/react';
import { Person } from 'akar-icons';
import { useNavigate } from 'react-router-dom';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';

const StudentPage = () => {
  const navigate = useNavigate();
  const backgroundColor = useColorModeValue('#F9F9F9', 'gray.800');
  const orderedNavItems = [
    {
      label: 'Dashboard',
      link: '#/',
    },
    { label: 'Students', link: '#/students' },
  ];
  return (
    <Box width={`100%`} height={`100%`}>
      <BreadcrumbNav orderedNavItems={orderedNavItems} />
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
          <chakra.form width={'100%'} padding={'3rem'} paddingTop={'2rem'}>
            <FormControl>
              <chakra.label
                htmlFor='course'
                // color={"gray.600"}
                fontWeight={'semibold'}
              >
                Course
              </chakra.label>
              <Select
                id='course'
                placeholder='Select Course'
                backgroundColor={'blackAlpha.50'}
                borderRadius={'4px'}
                marginTop={'0.5rem'}
              >
                <option value={'BIT'}>BIT</option>
                <option value='BIBM'>BIBM</option>
              </Select>
            </FormControl>
            <FormControl marginTop={'1rem'}>
              <chakra.label
                htmlFor='group'
                // color={"gray.600"}
                fontWeight={'semibold'}
              >
                Level
              </chakra.label>
              <Input
                id='level'
                placeholder='Enter/Select Level'
                backgroundColor={'blackAlpha.50'}
                borderRadius={'4px'}
                list={'level_list'}
                marginTop={'0.5rem'}
              />

              <datalist id='level_list'>
                <option value='1'></option>
                <option value='2'></option>
              </datalist>
            </FormControl>
            <Button
              type='submit'
              display={'block'}
              color='white'
              _hover={{
                backgroundColor: `brand.700`,
              }}
              backgroundColor='brand.500'
              width={'100%'}
              marginTop={'2rem'}
              onClick={() => {
                navigate('/view-students');
              }}
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
