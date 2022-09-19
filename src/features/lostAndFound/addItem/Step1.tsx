import {
  Box,
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
} from '@chakra-ui/react';
import { BsCloudUpload } from 'react-icons/bs';
import { stepPropType } from '.';

export const Step1: React.FC<stepPropType> = ({
  formState,
  dispatchFormAction,
}) => {
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
            <Input
              value={formState.itemName}
              onChange={(e) =>
                dispatchFormAction({
                  type: 'SET_ITEM_NAME',
                  payload: e.target.value,
                })
              }
              placeholder='Enter item name'
            />
          </FormControl>

          <FormControl maxWidth={['300px', '300px', '150px']}>
            <FormLabel>No of items</FormLabel>
            <NumberInput
              value={formState.noOfItems}
              onChange={(value) =>
                dispatchFormAction({ type: 'SET_NO_OF_ITEMS', payload: value })
              }
            >
              <NumberInputField placeholder='0' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl maxWidth={'300px'}>
            <FormLabel>Category</FormLabel>
            <Select
              placeholder='Select a cateogory'
              value={formState.category}
              onChange={(e) =>
                dispatchFormAction({
                  type: 'SET_CATEGORY',
                  payload: e.target.value,
                })
              }
            >
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
          <Textarea
            value={formState.itemDescription}
            onChange={(e) =>
              dispatchFormAction({
                type: 'SET_ITEM_DESCRIPTION',
                payload: e.target.value,
              })
            }
            height={`150px`}
          ></Textarea>
        </FormControl>
      </VStack>
      <Box mt={`1rem`}>
        <Button colorScheme={'brand'} leftIcon={<BsCloudUpload />}>
          Upload Photos
        </Button>
      </Box>
    </Box>
  );
};
