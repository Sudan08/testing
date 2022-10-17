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
  VStack,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsAuthenticated } from './authSlice';

const ForgotPassword = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);
  const [email, setEmail] = useState('');

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const response = await login(email)
    // if (response.status === 200) {
    //   setIsLoggedIn(true)
    //   setAuthToken(response.data.token)

    //   toast({
    //     title: 'OTP sent Successfully',
    //     description: response.data.message,
    //     status: 'success',
    //     duration: 5000,
    //     isClosable: true,
    //     position: 'top-right',
    //   })
    // } else {
    //   toast({
    //     title: 'Failed to get OTP',
    //     description: response.data,
    //     status: 'error',
    //     duration: 5000,
    //     isClosable: true,
    //     position: 'top-right',
    //   })
    // }
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
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              value={email}
              placeholder={'Enter Email'}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
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
              onClick={() => navigate('/login')}
            >
              Back to login
            </Button>
          </FormControl>
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
