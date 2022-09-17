import {
  Box,
  HStack,
  VStack,
  Icon,
  Center,
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
} from '@chakra-ui/react';

import BreadcrumbNav from '../../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../../data/breadcrumbDatas';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Step1 = () => {
  return (
    <Box width={`100%`} height={`100%`}>
      <BreadcrumbNav orderedNavItems={LostandFoundPageBreadcrumbNav} />
      <VStack>
        <Box
          margin={`1rem`}
          borderRadius={`12px`}
          width={`100%`}
          maxW={`1200`}
          boxShadow={[`none`, `none`, `0px 0px 4px rgba(0,0,0,0.25)`]}
        >
          <HStack
            alignItems={'center'}
            justifyContent={'space-around'}
            my={`2rem`}
          >
            <Box alignItems={`center`} justifyContent={`center`}>
              <HStack>
                <Icon
                  as={RiNumber1}
                  backgroundColor={`#74C043`}
                  padding={`5px`}
                  color={`#fff`}
                  borderRadius={`100%`}
                  mx={`0.33wrem`}
                  height={`30px`}
                  width={`30px`}
                />
                <Center>Item Details</Center>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Icon
                  as={RiNumber2}
                  backgroundColor={`#606A72`}
                  padding={`5px`}
                  color={`#fff`}
                  borderRadius={`100%`}
                  mx={`0.33wrem`}
                  height={`30px`}
                  width={`30px`}
                />
                <Center>Found Details </Center>
              </HStack>
            </Box>
            <Box>
              <HStack>
                <Icon
                  as={RiNumber3}
                  backgroundColor={`#606A72`}
                  padding={`5px`}
                  color={`#fff`}
                  borderRadius={`100%`}
                  mx={`0.33wrem`}
                  height={`30px`}
                  width={`30px`}
                />
                <Center>Item Status</Center>
              </HStack>
            </Box>
          </HStack>
          <Box ml={`8.3rem`} height={`70vh`}>
            <Text>Step 1/3</Text>
            <Box my={`2rem`}>
              <Text as={`b`} fontSize={`1.3rem`}>
                Item Details
              </Text>
              <Text color={`grey`}>
                Please fill in the details for all of the following fields
              </Text>
            </Box>
            <Box justifyContent={`space-evenly`} width={`1200px`}>
              <HStack spacing='150px'>
                <FormControl w='250px'>
                  <FormLabel>Item Name</FormLabel>
                  <Input placeholder='Enter item name' />
                </FormControl>

                <FormControl w='115px'>
                  <FormLabel>No of items</FormLabel>
                  <NumberInput>
                    <NumberInputField placeholder='0' />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>

                <FormControl w='250px'>
                  <FormLabel>Category</FormLabel>
                  <Select placeholder='Select a cateogory'>
                    <option>Books</option>
                    <option>Phone</option>
                    <option>Cloth</option>
                    <option>Keys</option>
                    <option>Charger</option>
                  </Select>
                </FormControl>
              </HStack>
            </Box>
            <Box mt={`2rem`}>
              <FormControl width={`40%`}>
                <FormLabel>Item Description</FormLabel>
                <Textarea height={`150px`}></Textarea>
              </FormControl>
            </Box>
            <Box mt={`0.5rem`}>
              <Button color={`#fff`} backgroundColor={`#74C043`}>Upload Photos</Button>
            </Box>
          </Box>
          <Box>
            <HStack
              alignItems={`baseline`}
              justifyContent={`flex-end`}
              width={`100%`}
            >
              <Link to='/lost-and-found/add/2'>
                <Button color={`#fff`} backgroundColor={`#74C043`} mr={`7rem`} mb={`3rem`}>
                  Next
                </Button>
              </Link>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default Step1;
