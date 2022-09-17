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
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '../../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../../data/breadcrumbDatas';
import { StepHeader } from '../../../components/lostAndFound';

export const Step2 = () => {
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
        <StepHeader currentStep={2} completedSteps={[1]} />
        <Box width={'100%'}>
          <Text>Step 2/3</Text>
          <Box my={`2rem`}>
            <Text as={`b`} fontSize={`1.3rem`}>
              Found Details
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
                <FormLabel>Found by</FormLabel>
                <Input placeholder='Enter name' />
              </FormControl>

              <FormControl maxWidth={'300px'}>
                <FormLabel>Location</FormLabel>
                <Select placeholder='SR-04 Cromption'>
                  <option>SR-01 Wolves</option>
                  <option>WOlverhampton</option>
                  <option>Lounge</option>
                  <option>Library</option>
                  <option>Ground</option>
                </Select>
              </FormControl>

              <FormControl maxWidth={'300px'}>
                <FormLabel>Date of Found</FormLabel>
                <InputGroup>
                  <Input
                    placeholder={`Select Date`}
                    onFocus={(e: any) => (e.target.type = 'date')}
                  />
                </InputGroup>
              </FormControl>
            </Flex>
          </VStack>
          <Box mt={`2rem`}>
            <FormControl maxWidth={`300px`}>
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
        <HStack
          alignItems={`baseline`}
          justifyContent={`flex-end`}
          width={`100%`}
          padding={'2rem 0rem'}
          gap={'1rem'}
        >
          <Link to='/lost-and-found/add/1'>
            <Button backgroundColor={`#fff`} color={`#000`}>
              Back
            </Button>
          </Link>
          <Link to='/lost-and-found/add/3'>
            <Button colorScheme={'brand'}>Next</Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};
