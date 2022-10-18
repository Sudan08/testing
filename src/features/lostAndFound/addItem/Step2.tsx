import {
  Box,
  VStack,
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Flex,
  FormErrorMessage,
  chakra,
} from '@chakra-ui/react';
import { stepPropType } from './AddItem';

const Step2: React.FC<stepPropType> = ({ register, errors }) => {
  return (
    <Box width={'100%'}>
      <chakra.form>
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
            <FormControl isInvalid={Boolean(errors.foundBy)}>
              <FormLabel htmlFor="ItemName" fontWeight={'semibold'}>
                Found By
              </FormLabel>
              <Input
                id="foundBy"
                placeholder="Enter/Select Found By"
                {...register('foundBy', {
                  required: 'Found By is required',
                })}
              />
              <FormErrorMessage>
                {errors.foundBy && errors.foundBy.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.location)}>
              <FormLabel htmlFor="location">Location</FormLabel>
              <Select
                id="location"
                {...register('location', {
                  required: 'Location is required',
                })}
              >
                <option>SR-01 Wolves</option>
                <option>WOlverhampton</option>
                <option>Lounge</option>
                <option>Library</option>
                <option>Ground</option>
              </Select>
              <FormErrorMessage>
                {errors.location && errors.location.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={Boolean(errors.foundDate)}>
              <FormLabel htmlFor="ItemName" fontWeight={'semibold'}>
                Date Found
              </FormLabel>
              <Input
                id="foundDate"
                type={'date'}
                placeholder="Enter/Select Date Found"
                {...register('foundDate', {
                  required: 'Date Found is required',
                })}
              />
              <FormErrorMessage>
                {errors.foundDate && errors.foundDate.message}
              </FormErrorMessage>
            </FormControl>
          </Flex>
        </VStack>
        <Box mt={`2rem`}>
          <FormControl isInvalid={Boolean(errors.depositedTo)}>
            <FormLabel htmlFor="depositedTo">Deposited To</FormLabel>
            <Select
              id="depositedTo"
              {...register('depositedTo', {
                required: 'Deposited To is required',
              })}
            >
              <option>SR-01 Wolves</option>
              <option>WOlverhampton</option>
              <option>Lounge</option>
              <option>Library</option>
              <option>Ground</option>
            </Select>
            <FormErrorMessage>
              {errors.depositedTo && errors.depositedTo.message}
            </FormErrorMessage>
          </FormControl>
        </Box>
      </chakra.form>
    </Box>
  );
};
export default Step2;
