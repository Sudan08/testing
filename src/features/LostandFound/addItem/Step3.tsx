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
  Button,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '../../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../../data/breadcrumbDatas';
import { RiNumber3 } from 'react-icons/ri';
import { BsCheck2Circle } from 'react-icons/bs';

const Step3 = () => {
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
                  as={BsCheck2Circle}
                  color={`#74C043`}
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
                  as={BsCheck2Circle}
                  color={`#74C043`}
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
                  backgroundColor={`#74C043`}
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
            <Text>Step 3/3</Text>
            <Box my={`2rem`}>
              <Text as={`b`} fontSize={`1.3rem`}>
                What's the status of the item?
              </Text>
              <Text color={`grey`}>
                Please state wheather the item has been claimed or still pending
              </Text>
            </Box>
            <Box justifyContent={`space-evenly`} width={`1200px`}>
              <RadioGroup justifyContent={`flex-start`}>
                <HStack>
                  <Box
                    border={`1px solid #DFDFDF`}
                    px={`1rem`}
                    py={`0.5rem`}
                    w={`250px`}
                    borderRadius={`5px`}
                  >
                    <Radio value='Claimed'>Claimed</Radio>
                  </Box>
                  <Box
                    border={`1px solid #DFDFDF`}
                    px={`1rem`}
                    py={`0.5rem`}
                    w={`250px`}
                    borderRadius={`5px`}
                  >
                    <Radio value='Pending'>Pending</Radio>
                  </Box>
                </HStack>
              </RadioGroup>
            </Box>
            <Box my={`2rem`}>
              <Text as={`b`} fontSize={`1.3rem`}>
                Claim Details
              </Text>
            </Box>
            <Box justifyContent={`space-evenly`} width={`1200px`}>
              <HStack spacing='120px'>
                <FormControl w='250px'>
                  <FormLabel>Recieved by</FormLabel>
                  <Input placeholder='Enter name' />
                </FormControl>

                <FormControl w='250px'>
                  <FormLabel>Level</FormLabel>
                  <Select placeholder='Level 4'>
                    <option>Level 5</option>
                    <option>Level 6</option>
                  </Select>
                </FormControl>

                <FormControl w='250px'>
                  <FormLabel>Group</FormLabel>
                  <Select placeholder='1'>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </Select>
                </FormControl>
              </HStack>
            </Box>
          </Box>
          <Box mr={`7rem`} mb={`3rem`}>
            <HStack
              alignItems={`baseline`}
              justifyContent={`flex-end`}
              width={`100%`}
            >
              <Link to='/lost-and-found/add/2'>
                <Button backgroundColor={`#fff`} color={`#000`}>
                  Back
                </Button>
              </Link>
              <Link to='/lost-and-found'>
                <Button backgroundColor={`#74C043`} color={`#fff`}>
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

export default Step3;
