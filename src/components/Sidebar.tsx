import {
  Image,
  VStack,
  Icon,
  Button,
  useDisclosure,
  AlertDialogFooter,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  useToast,
  Flex,
  IconButton,
  useColorMode,
  HStack,
} from '@chakra-ui/react';
import { MdAdd, MdOutlineFeedback } from 'react-icons/md';
import { AiOutlineUser, AiOutlineLineChart } from 'react-icons/ai';
import React, { useEffect } from 'react';
import { chakra } from '@chakra-ui/system';
import { Schedule, Person } from 'akar-icons';
import { VscDashboard } from 'react-icons/vsc';
import { SiGoogleclassroom } from 'react-icons/si';
import { LockIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NavItem from './NavItem';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

const Sidebar = ({ isMobileView = false }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage) {
      localStorage.setItem('rmsTheme', colorMode);
    }
  }, [colorMode]);

  const handleLogout = () => {
    onClose();
    dispatch(logout());
    toast({
      title: 'Logout Success',
      description: 'You have been logged out',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const handleCancelLogout = () => {
    onClose();
    toast({
      title: 'Cancelled Logout.',
      description: 'Logout cancelled',
      status: 'error',
      duration: 8000,
      isClosable: true,
    });
  };
  return (
    <VStack
      height={isMobileView ? '100%' : `100vh`}
      overflow={`hidden`}
      width={isMobileView ? '100%' : `293px`}
      position={`sticky`}
      boxShadow={'2xl'}
      left={`0`}
      alignItems={isMobileView ? 'flex-start' : 'flex-start'}
      padding={isMobileView ? '1rem' : `2rem 1rem`}
      overflowY={'scroll'}
    >
      <HStack
        width={`100%`}
        padding={'0.5rem'}
        justifyContent={'space-between'}
      >
        <Image
          width={'60%'}
          // height={isMobileView ? '50px' : '60px'}
          src={`/images/${
            colorMode === 'dark' ? 'logo_light.png' : 'logo_full.png'
          }`}
          alt={`logo`}
        />
        <IconButton
          margin={'0.5rem 0'}
          aria-label='Toggle theme'
          onClick={toggleColorMode}
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        />
      </HStack>
      <VStack
        marginTop={isMobileView ? '1.5rem !important' : `2rem !important`}
        height={`100%`}
        gap={isMobileView ? '0.5rem' : `1rem`}
        width={`100%`}
      >
        {navItems.map((navItem, index) => (
          <NavItem
            label={navItem.label}
            icon={navItem.icon}
            link={navItem.link}
            key={index}
            subItems={navItem.subItems}
          />
        ))}
        <Flex height={`100%`} width={`100%`}>
          <Flex
            as={Button}
            onClick={onOpen}
            marginTop={'auto'}
            padding={'0.5rem 1rem'}
            colorScheme={'red'}
            borderRadius={'20px'}
            cursor={'pointer'}
            justifyContent={'flex-start'}
            transition='0.2s ease-in-out'
            _hover={{
              backgroundColor: 'red.400',
              color: '#fff',
            }}
            gap={`1rem`}
            width={'100%'}
          >
            <LockIcon /> <chakra.p fontWeight={'600'}>Logout</chakra.p>
          </Flex>
        </Flex>
      </VStack>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        isCentered
        motionPreset='scale'
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Confirm Logout?
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You want to logout!</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={handleCancelLogout}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={() => handleLogout()} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </VStack>
  );
};

export default Sidebar;

const navItems = [
  {
    label: 'Dashboard',
    link: '/',
    icon: <Icon as={VscDashboard} height={`24px`} />,
  },

  {
    label: 'Schedule',
    link: '#',
    subItems: [
      { label: 'Add Schedule', link: '/add-schedule' },
      { label: 'View Schedule', link: '/view-schedule' },
    ],
    icon: <Schedule strokeWidth={2} size={24} />,
  },
  {
    label: 'Classes',
    link: '/classes',
    icon: <Icon as={SiGoogleclassroom} />,
  },
  {
    label: 'Lecturers',
    link: 'lecturers',
    icon: <Person strokeWidth={2} size={24} />,
  },

  {
    label: 'Students',
    link: '/students',
    icon: <Icon as={AiOutlineUser} />,
  },
  {
    label: 'Analytics',
    link: '/analytics',
    icon: <Icon as={AiOutlineLineChart} />,
  },
  {
    label: 'Feedbacks',
    link: '/feedbacks',
    icon: <Icon as={MdOutlineFeedback} />,
  },
  {
    label: 'Add Student',
    link: '/add-student',
    icon: <Icon as={MdAdd} />,
  },
];
