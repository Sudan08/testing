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
import { stepPropType } from './AddItem';

export const Step2: React.FC<stepPropType> = ({
  formState,
  dispatchFormAction,
}) => {
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
        spacing="1rem"
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
            <Input
              value={formState.foundBy}
              onChange={(e) =>
                dispatchFormAction({
                  type: 'SET_FOUND_BY',
                  payload: e.target.value,
                })
              }
              placeholder="Enter name"
            />
          </FormControl>

          <FormControl maxWidth={'300px'}>
            <FormLabel>Location</FormLabel>
            <Select
              placeholder="Select location"
              value={formState.location}
              onChange={(e) =>
                dispatchFormAction({
                  type: 'SET_LOCATION',
                  payload: e.target.value,
                })
              }
            >
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
                value={formState.foundDate}
                onChange={(e) =>
                  dispatchFormAction({
                    type: 'SET_FOUND_DATE',
                    payload: e.target.value,
                  })
                }
                placeholder={`Select Date`}
                onFocus={(e) => (e.target.type = 'date')}
              />
            </InputGroup>
          </FormControl>
        </Flex>
      </VStack>
      <Box mt={`2rem`}>
        <FormControl maxWidth={`300px`}>
          <FormLabel>Deposited to</FormLabel>
          <Select
            value={formState.depositedTo}
            onChange={(e) =>
              dispatchFormAction({
                type: 'SET_DEPOSITED_TO',
                payload: e.target.value,
              })
            }
            placeholder="Deposited to"
          >
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
