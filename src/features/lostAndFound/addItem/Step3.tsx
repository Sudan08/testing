import {
  Box,
  Text,
  RadioGroup,
  Radio,
  Flex,
  chakra,
  FormErrorMessage,
  FormControl,
} from '@chakra-ui/react';
import { Claimed } from '../../../components/lostAndFound';
import { stepPropType } from './AddItem';

export const Step3: React.FC<stepPropType> = ({
  register,
  errors,
  handleSubmit,
  watch,
}) => {
  const status = watch('status');
  return (
    <>
      <Box width={'100%'}>
        <Text>Step 3/3</Text>
        <Box my={`2rem`}>
          <Text as={`b`} fontSize={`1.3rem`}>
            What&apos;s the status of the item?
          </Text>
          <Text color={`grey`}>
            Please state wheather the item has been claimed or still pending
          </Text>
        </Box>
        <chakra.form>
          <FormControl isInvalid={Boolean(errors.status)}>
            <RadioGroup defaultValue={'PENDING'} justifyContent={`flex-start`}>
              <Flex
                flexDirection={['column', 'column', 'row']}
                gap={['0.5rem', '1rem', '2rem']}
                width={'100%'}
              >
                <Box
                  border={`1px solid #DFDFDF`}
                  px={`1rem`}
                  py={`0.5rem`}
                  w={`250px`}
                  borderRadius={`5px`}
                  cursor={'pointer'}
                >
                  <Radio
                    id={'claimedBtn'}
                    value={'CLAIMED'}
                    {...register('status', {
                      required: 'Status is required',
                    })}
                  >
                    Claimed
                  </Radio>
                </Box>
                <Box
                  border={`1px solid #DFDFDF`}
                  px={`1rem`}
                  py={`0.5rem`}
                  w={`250px`}
                  borderRadius={`5px`}
                  cursor={'pointer'}
                >
                  <Radio
                    value={`PENDING`}
                    {...register('status', {
                      required: 'Status is required',
                    })}
                  >
                    Pending
                  </Radio>
                </Box>
              </Flex>
            </RadioGroup>
            <FormErrorMessage>
              {errors.status && errors.status.message}
            </FormErrorMessage>
          </FormControl>

          {status === 'CLAIMED' && (
            <Claimed
              register={register}
              handleSubmit={handleSubmit}
              errors={errors}
              watch={watch}
            />
          )}
        </chakra.form>
      </Box>
    </>
  );
};
