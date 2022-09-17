import {
  Box,
  HStack,
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
} from '@chakra-ui/react';

export const Claimed = () => {
  return (
    <Box>
      <Box my={`2rem`}>
        <Text as={`b`} fontSize={`1.3rem`}>
          Claim Details
        </Text>
      </Box>
      <Box justifyContent={`space-evenly`} width={`1200px`} my={`1rem`}>
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
      <Box justifyContent={`space-evenly`} width={`1200px`}>
        <HStack spacing='120px'>
          <FormControl w='250px'>
            <FormLabel>Semester</FormLabel>
            <Select placeholder='1'>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Select>
          </FormControl>

          <FormControl w='250px'>
            <FormLabel>Course</FormLabel>
            <Select placeholder='BIT'>
              <option>BIBM</option>
              <option>MBA</option>
            </Select>
          </FormControl>
        </HStack>
      </Box>
    </Box>
  );
};
