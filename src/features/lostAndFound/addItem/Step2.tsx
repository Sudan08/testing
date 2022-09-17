import {
  Box,
  HStack,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  InputGroup,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '../../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../../data/breadcrumbDatas';
import { StepHeader } from '../../../components/lostAndFound';

export const Step2 = () => {
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
          <StepHeader currentStep={2} completedSteps={[1]} />
          <Box ml={`8.3rem`} height={`70vh`}>
            <Text>Step 2/3</Text>
            <Box my={`2rem`}>
              <Text as={`b`} fontSize={`1.3rem`}>
                Found Details
              </Text>
              <Text color={`grey`}>
                Please fill in the details for all of the following fields
              </Text>
            </Box>
            <Box justifyContent={`space-evenly`} width={`1200px`}>
              <HStack spacing='120px'>
                <FormControl w='250px'>
                  <FormLabel>Found by</FormLabel>
                  <Input placeholder='Enter name' />
                </FormControl>

                <FormControl w='250px'>
                  <FormLabel>Location</FormLabel>
                  <Select placeholder='SR-04 Cromption'>
                    <option>SR-01 Wolves</option>
                    <option>WOlverhampton</option>
                    <option>Lounge</option>
                    <option>Library</option>
                    <option>Ground</option>
                  </Select>
                </FormControl>

                <FormControl w='200px'>
                  <FormLabel>Date of Found</FormLabel>
                  <InputGroup>
                    {/* <InputLeftElement 
                          children={<CalendarIcon/>}/> */}
                    <Input
                      placeholder={`Select Date`}
                      onFocus={(e: any) => (e.target.type = 'date')}
                    />
                  </InputGroup>
                </FormControl>
              </HStack>
            </Box>
            <Box mt={`2rem`}>
              <FormControl width={`250px`}>
                <FormLabel>Deposited to</FormLabel>
                <Select placeholder='SR-04 Cromption'>
                  <option>SR-01 Wolves</option>
                  <option>WOlverhampton</option>
                  <option>Lounge</option>
                  <option>Library</option>
                  <option>Ground</option>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box mr={`7rem`} mb={`3rem`}>
            <HStack
              alignItems={`baseline`}
              justifyContent={`flex-end`}
              width={`100%`}
            >
              <Link to='/lost-and-found/add/1'>
                <Button backgroundColor={`#fff`} color={`#000`}>
                  Back
                </Button>
              </Link>
              <Link to='/lost-and-found/add/3'>
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
