import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  VStack,
  Spinner,
  useToast,
  IconButton,
  useColorMode,
  Checkbox,
  FormErrorMessage,
} from '@chakra-ui/react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { BiLock } from 'react-icons/bi';
import { chakra } from '@chakra-ui/system';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useLoginMutation } from '../auth/authApiSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuthenticated,
  setInitialCredentials,
} from '../auth/authSlice';
import { ILoginResponse, loginPayload } from '../../interfaces';
import { useForm } from 'react-hook-form';

const Login = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<loginPayload>();
  const { colorMode, toggleColorMode } = useColorMode();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const rememberMe = watch('rememberMe');

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem('rmsTheme', colorMode);
    }
  }, [colorMode]);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const [isDemoClicked, setIsDemoClicked] = useState(false);

  const demoValueSetter = async () => {
    setValue('email', 'rms@gmail.com');
    setValue('password', 'admin');
    setIsDemoClicked(true);
  };

  useEffect(() => {
    if (isDemoClicked) {
      const payload = getValues();
      handleLogin(payload);
    }
  }, [isDemoClicked]);

  const handleLogin = async (values: loginPayload) => {
    try {
      const data: ILoginResponse = await login(values).unwrap();
      if (data.scope) {
        dispatch(
          setInitialCredentials({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            scope: data.scope,
            rememberMe,
          })
        );
        toast({
          title: 'Logged in successfully!',
          description: 'Welcome admin!',
          position: 'top-right',
          status: 'success',
          isClosable: true,
        });
        navigate('/');
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (e: any) {
      toast({
        title: 'Invalid credentials!',
        description: 'Please recheck your email and password!',
        position: 'top-right',
        status: 'error',
        isClosable: true,
      });
    }
  };
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
            aria-label='Toggle theme'
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
            src={
              colorMode === 'light'
                ? './images/logo_full.png'
                : './images/logo_light.png'
            }
            height={`62px`}
            width={`auto`}
            objectFit={`contain`}
          />
        </HStack>
        <Heading fontSize={[`1.4rem`, `1.6rem`, `2rem`]} margin={0}>
          Welcome Back Admin!
        </Heading>
        <chakra.p fontSize={[`0.9rem`, `1.1rem`, `1.25rem`]} margin={0}>
          Sign in to continue with Herald App.
        </chakra.p>
        <chakra.form
          display={`flex`}
          flexDir={`column`}
          marginTop={`2rem !important`}
          gap={`1rem`}
          width={`100%`}
          onSubmit={handleSubmit(handleLogin)}
        >
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel htmlFor='email'>Email address</FormLabel>
            <Input
              placeholder='john@doe.com'
              id='email'
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel htmlFor='password'>Password</FormLabel>
            <InputGroup>
              <Input
                id='password'
                placeholder='********'
                {...register('password', { required: 'Password is required' })}
                type={isPasswordVisible ? 'text' : 'password'}
              />
              <InputRightElement
                borderLeft={`1px solid rgba(0, 0, 0, 0.2)`}
                cursor={`pointer`}
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                children={
                  <Icon as={!isPasswordVisible ? VscEye : VscEyeClosed} />
                }
              />
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl>
            <HStack width={`full`}>
              <InputGroup display={`flex`} alignItems={`center`} gap={`0.4rem`}>
                <Checkbox
                  borderRadius={`16px`}
                  colorScheme={`green`}
                  id={`remember`}
                  bottom={`1px`}
                  {...register('rememberMe')}
                />
                <FormLabel
                  margin={`0 !important`}
                  cursor={`pointer`}
                  htmlFor='remember'
                >
                  Remember Me?
                </FormLabel>
              </InputGroup>
              <Button
                borderRadius={`8px`}
                colorScheme={`blue`}
                width={`150px`}
                onClick={demoValueSetter}
                type={`button`}
              >
                Demo
              </Button>
              <Button
                borderRadius={`8px`}
                colorScheme={`brand`}
                width={`150px`}
                type={`submit`}
              >
                {isLoading ? <Spinner /> : 'Login'}
              </Button>
            </HStack>
          </FormControl>
        </chakra.form>
        <HStack width={`100%`} marginTop={`3rem !important`}>
          <Icon as={BiLock} />
          <Link href='/forgot-password'>Forgot Your Password?</Link>
        </HStack>
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
export default Login;
