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

const Step1: FC<stepPropType> = ({ register, errors }) => {
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
        <chakra.form width={'100%'} paddingTop={'2rem'} height={'auto'}>
          <Flex
            flexDirection={['column', 'column', 'row']}
            gap={['0.5rem', '1rem', '2rem']}
            width={'100%'}
          >
            <FormControl isInvalid={Boolean(errors.itemName)}>
              <FormLabel htmlFor="ItemName" fontWeight={'semibold'}>
                Item Name
              </FormLabel>
              <Input
                id="itemName"
                placeholder="Enter/Select Item Name"
                {...register('itemName', {
                  required: 'Item Name is required',
                })}
              />
              <FormErrorMessage>
                {errors.itemName && errors.itemName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              maxWidth={['300px', '300px', '150px']}
              isInvalid={Boolean(errors.noOfItems)}
            >
              <FormLabel htmlFor="No of items">No of items</FormLabel>
              <NumberInput min={1} defaultValue={1}>
                <NumberInputField
                  {...register('noOfItems', {
                    required: 'No of items is required',
                    min: {
                      value: 1,
                      message: 'Minimum value is 1',
                    },
                  })}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormErrorMessage>
                {errors.noOfItems && errors.noOfItems.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.category)}>
              <FormLabel htmlFor="category">Category</FormLabel>
              <Select
                id="category"
                {...register('category', {
                  required: 'Category is required',
                })}
              >
                <option value="" disabled hidden selected>
                  Select Category
                </option>
                <option>Books</option>
                <option>Phone</option>
                <option>Cloth</option>
                <option>Keys</option>
                <option>Charger</option>
              </Select>
              <FormErrorMessage>
                {errors.category && errors.category.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
          <FormControl
            marginTop={`1rem`}
            maxWidth={['300px', '300px', '500px']}
            width={['100%', '100%', '100%', '50%']}
            isInvalid={Boolean(errors.itemDescription)}
          >
            <FormLabel htmlFor="itemDescription">Item Description</FormLabel>
            <Textarea
              placeholder="Item Description"
              height={`150px`}
              id="itemDescription"
              {...register('itemDescription', {
                required: 'Item Description is required',
              })}
            ></Textarea>
            <FormErrorMessage>
              {errors.itemDescription && errors.itemDescription.message}
            </FormErrorMessage>
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
export default Step1;
