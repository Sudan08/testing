import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  Image,
  Button,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { ThreeLineHorizontal } from 'akar-icons';
import { useRef } from 'react';
import Sidebar from './Sidebar';
type mobileNavPropType = {
  isOpen: boolean;
  onClose: () => void;
};
export const MobileNav: React.FC<mobileNavPropType> = ({ isOpen, onClose }) => {
  return (
    <Drawer placement={`left`} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton zIndex={`2`} />
        </DrawerHeader>
        <DrawerBody padding={`0`}>
          <Sidebar isMobileView={true} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export const TopBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toggleBtnRef = useRef(null);

  const backgroundColor = useColorModeValue('brand.600', 'brand.700');
  return (
    <HStack
      backgroundColor={backgroundColor}
      justifyContent={`space-between`}
      height={`60px`}
      width={`100%`}
      padding={`0 1rem`}
    >
      <Image
        src={'/images/logo_white.png'}
        height={`40px`}
        boxShadow={'2xl'}
        alt={`logo`}
      />
      <Button
        ref={toggleBtnRef}
        onClick={onOpen}
        color={`white`}
        transition={`0.2s`}
        colorScheme={`transparent`}
        _hover={{
          backgroundColor: 'transparent',
        }}
        backgroundColor={`transparent`}
      >
        <ThreeLineHorizontal size={32} />
      </Button>
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
};
