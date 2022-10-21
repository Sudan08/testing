import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  useColorMode,
  FormErrorMessage,
  VStack,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/store';
import { selectIsAuthenticated } from './authSlice';
import { useForm } from 'react-hook-form';
import { IForgetPassword } from '../../interfaces';

const ForgotPassword = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgetPassword>();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  return (
    <VStack
      alignItems={`center`}
      justifyContent={`center`}
      width={`100%`}
      minH={`100vh`}
      height={`100%`}
      padding={`0.5rem`}
    >
      <VStack
        padding={[`2rem`, `5rem`]}
        width={`100%`}
        maxW={`713px`}
        height={`100%`}
        borderRadius={`10px`}
        boxShadow={'2xl'}
      >
        <HStack width={`100%`} justifyContent={`flex-end`}>
          <IconButton
            margin={'0.5rem 0'}
            aria-label="Toggle theme"
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          />
        </HStack>
        <HStack
          justifyContent={`center`}
          alignItems={`center`}
          marginBottom={`1rem`}
          width={`100%`}
        >
          <Image
            src="./images/logo_full.png"
            height={`62px`}
            margin={'4'}
            width={`auto`}
            objectFit={`contain`}
          />
        </HStack>
        <VStack
          justifyContent={`center`}
          alignItems={`left`}
          marginBottom={`1rem`}
          width={`100%`}
        >
          <Heading fontSize={[`1.4rem`, `1.6rem`, `2rem`]} margin={0}>
            Reset Admin Password
          </Heading>
          <chakra.p fontSize={[`0.9rem`, `1.1rem`, `1.25rem`]} margin={0}>
            Get OTP to your registered email.
          </chakra.p>
        </VStack>
        <chakra.form
          display={`flex`}
          flexDir={`column`}
          marginTop={`2rem !important`}
          gap={`1rem`}
          width={`100%`}
          onSubmit={handleSubmit(() => {
            navigate('/');
          })}
        >
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder={'Enter Email'}
              {...register('email', {
                required: 'Email is required',
              })}
              type="email"
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            borderRadius={`8px`}
            colorScheme={`brand`}
            width={'100%'}
            type={`submit`}
            marginTop={'4'}
          >
            Send Reset OTP
          </Button>
          <Button
            borderRadius={`8px`}
            color={'#74C043'}
            variant={'link'}
            width={'100%'}
            type={`submit`}
            marginTop={'4'}
            onClick={() => navigate('/')}
          >
            Back to login
          </Button>
        </chakra.form>
      </VStack>
      <chakra.p
        marginTop={[`2rem !important`, `3rem !important`]}
        fontSize={[`0.8rem`, `1rem`]}
        textAlign={`center`}
      >
        Copyright &copy; Herald College Kathmandu | All Right Reserved.{' '}
      </chakra.p>
    </VStack>
  );
};
export default ForgotPassword;
