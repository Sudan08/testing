import {
  Box,
  HStack,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Textarea,
  Button,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

import BreadcrumbNav from '../../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../../data/breadcrumbDatas';
import { Link } from 'react-router-dom';
import { StepHeader } from '../../../components/lostAndFound';
import { BsCloudUpload } from 'react-icons/bs';

export const Step1 = () => {
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
        <StepHeader currentStep={1} />
        <Box width={'100%'}>
          <Text>Step 1/3</Text>
          <Box my={`2rem`}>
            <Text as={`b`} fontSize={`1.3rem`}>
              Item Details
            </Text>
            <Text color={`grey`}>
              Please fill in the details for all of the following fields
            </Text>
          </Box>
          <VStack
            spacing='1rem'
            width={'100%'}
            alignItems={'flex-start'}
            gap={'1rem'}
          >
            <Flex
              flexDirection={['column', 'column', 'row']}
              gap={['0.5rem', '1rem', '2rem']}
              width={'100%'}
            >
              <FormControl maxWidth={'300px'}>
                <FormLabel>Item Name</FormLabel>
                <Input placeholder='Enter item name' />
              </FormControl>

              <FormControl maxWidth={['300px', '300px', '150px']}>
                <FormLabel>No of items</FormLabel>
                <NumberInput>
                  <NumberInputField placeholder='0' />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl maxWidth={'300px'}>
                <FormLabel>Category</FormLabel>
                <Select placeholder='Select a cateogory'>
                  <option>Books</option>
                  <option>Phone</option>
                  <option>Cloth</option>
                  <option>Keys</option>
                  <option>Charger</option>
                </Select>
              </FormControl>
            </Flex>
            <FormControl
              maxWidth={['300px', '300px', '500px']}
              width={['100%', '100%', '100%', '50%']}
            >
              <FormLabel>Item Description</FormLabel>
              <Textarea height={`150px`}></Textarea>
            </FormControl>
          </VStack>
          <Box mt={`1rem`}>
            <Button colorScheme={'brand'} leftIcon={<BsCloudUpload />}>
              Upload Photos
            </Button>
          </Box>
        </Box>
        <HStack
          alignItems={`baseline`}
          justifyContent={`flex-end`}
          width={`100%`}
        >
          <Link to='/lost-and-found/add/2'>
            <Button m={'1rem 0'} color={`#fff`} colorScheme={'brand'}>
              Next
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};
