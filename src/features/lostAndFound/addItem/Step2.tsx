import {
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  InputGroup,
  Flex,
} from '@chakra-ui/react';

export const Step2 = () => {
  return (
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
  );
};
