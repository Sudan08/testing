import {
  Box,
  VStack,
  Text,
  chakra,
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
  FormErrorMessage,
} from '@chakra-ui/react';
import { FC } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import { stepPropType } from './AddItem';

export const Step1: FC<stepPropType> = ({ register, errors }) => {
  return (
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
        spacing="1rem"
        width={'100%'}
        alignItems={'flex-start'}
        gap={'1rem'}
      >
        <chakra.form
          width={'100%'}
          padding={'3rem'}
          paddingTop={'2rem'}
          height={'auto'}
        >
          <Flex
            flexDirection={['column', 'column', 'row']}
            gap={['0.5rem', '1rem', '2rem']}
            width={'100%'}
          >
            <FormControl
              marginTop={'1rem'}
              isInvalid={Boolean(errors.itemName)}
            >
              <FormLabel htmlFor="ItemName" fontWeight={'semibold'}>
                Item Name
              </FormLabel>
              <Input
                id="itemName"
                placeholder="Enter/Select Item Name"
                backgroundColor={'blackAlpha.50'}
                borderRadius={'4px'}
                list={'Item Name_list'}
                marginTop={'0.5rem'}
                {...register('itemName', {
                  required: 'Item Name is required',
                })}
              />
              <FormErrorMessage>
                {errors.itemName && errors.itemName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl maxWidth={['300px', '300px', '150px']}>
              <FormLabel>No of items</FormLabel>
              <NumberInput>
                <NumberInputField placeholder="0" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl maxWidth={'300px'}>
              <FormLabel>Category</FormLabel>
              <Select placeholder="Select a cateogory">
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
        </chakra.form>
      </VStack>
      <Box mt={`1rem`}>
        <Button colorScheme={'brand'} leftIcon={<BsCloudUpload />}>
          Upload Photos
        </Button>
      </Box>
    </Box>
  );
};
