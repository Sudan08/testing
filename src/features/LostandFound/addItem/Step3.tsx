import {
  Box,
  HStack,
  VStack,
  Icon,
  Center,
  Text,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  RadioGroup,
  Radio,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import BreadcrumbNav from '../../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../../data/breadcrumbDatas';
import { RiNumber3 } from 'react-icons/ri';
import { BsCheck2Circle } from 'react-icons/bs';
import { FaRegStickyNote } from 'react-icons/fa';
import { useState} from 'react';


import Claimed from './Claimed';

const Step3 = () => {

  const [status,setStatus] = useState('');
  const {isOpen , onOpen , onClose} = useDisclosure();


  return (
    <Box width={`100%`} height={`100%`}>
      <BreadcrumbNav orderedNavItems={LostandFoundPageBreadcrumbNav} />
      <VStack>
        <Box
          margin={`1rem`}
          borderRadius={`12px`}
          width={`100%`}
          maxW={`1200`}
          boxShadow={[`none`, `none`, `0px 0px 4px rgba(0,0,0,0.25)`]}
        >
          <HStack
            alignItems={'center'}
            justifyContent={'space-around'}
            my={`2rem`}
          >
      
            <Flex alignItems={`center`} 
            flexDirection={['column', 'column', 'column', 'column', 'row']}
            justifyContent={`center`}>
              <HStack>
                <Icon
                  as={BsCheck2Circle}
                  color={`#74C043`}
                  borderRadius={`100%`}
                  mx={`0.33wrem`}
                  height={`30px`}
                  width={`30px`}
                />
                <Center>Item Details</Center>
              </HStack>
            </Flex>
            <Flex>
              <HStack>
                <Icon
                  as={BsCheck2Circle}
                  color={`#74C043`}
                  borderRadius={`100%`}
                  mx={`0.33wrem`}
                  height={`30px`}
                  width={`30px`}
                />
                <Center>Found Details </Center>
              </HStack>
            </Flex>
            <Flex>
              <HStack>
                <Icon
                  as={RiNumber3}
                  backgroundColor={`#74C043`}
                  padding={`5px`}
                  color={`#fff`}
                  borderRadius={`100%`}
                  mx={`0.33wrem`}
                  height={`30px`}
                  width={`30px`}
                />
                <Center>Item Status</Center>
              </HStack>
            </Flex>
         
          </HStack>
          <Box ml={`8.3rem`} height={`75vh`}>
            <Text >Step 3/3</Text>
            <Box my={`2rem`}>
              <Text as={`b`} fontSize={`1.3rem`}>
                What's the status of the item?
              </Text>
              <Text color={`grey`}>
                Please state wheather the item has been claimed or still pending
              </Text>
            </Box>
            <Box justifyContent={`space-evenly`} width={`1200px`} >
              <RadioGroup justifyContent={`flex-start`}>
                <HStack>
                  <Box
                    border={`1px solid #DFDFDF`}
                    px={`1rem`}
                    py={`0.5rem`}
                    w={`250px`}
                    borderRadius={`5px`}
                    onChange={()=>setStatus('Claimed')}
                  >
                    <Radio value={`Claimed`} >Claimed</Radio>
                  </Box>
                  <Box
                    border={`1px solid #DFDFDF`}
                    px={`1rem`}
                    py={`0.5rem`}
                    w={`250px`}
                    borderRadius={`5px`}
                    onChange={()=>setStatus('Pending')}
                  >
                    <Radio value={`Pending`} >Pending</Radio>
                  </Box>
                </HStack>
              </RadioGroup>
            </Box>
            {status === 'Claimed' && <Claimed />}
          </Box>
          <Box mr={`7rem`} mb={`3rem`} ml={`8.3rem`}>

     
            <HStack
            justifyContent={'flex-end'}
            width={`100%`}
            alignItems={`baseline`}
            spacing={`600px`}
            >
              {status === 'Claimed' && (
              <Box pt={`1rem`}    
              alignItems={`baseline`}
              justifyContent={`flex-start`}
              width={`18%`}
              >
              <Text borderTop={'3px solid black'} textAlign={`center`}>Recieved signature</Text>
              </Box>
              )}
              <Box>
              <Link to='/lost-and-found/add/2'>
                <Button backgroundColor={`#fff`} color={`#000`}>
                  Back
                </Button>
              </Link>
          
                <Button backgroundColor={`#74C043`}  color={`#fff`} onClick={onOpen}>
                  Submit
                </Button>

                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader textAlign={`center`}>Add item</ModalHeader>
                <ModalCloseButton />
                <ModalBody textAlign={`center`} justifyContent={`center`} alignItems={`center`}>
                  <Text>It will be added</Text>
                  <Icon as={FaRegStickyNote} height={`50px`} width={`50px`} my={`1.5rem`}/>
                </ModalBody>

                <ModalFooter justifyContent={`center`} alignItems={`center`}>
                <Button backgroundColor={`white`} mr={3} onClick={onClose}>
                  Close
                </Button>
                <Link to='/lost-and-found'>
                <Button color={`white`} backgroundColor={`#74C043`}>Add Item</Button>
                </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
              </Box>
            </HStack>
            </Box>
          </Box>
      </VStack>
    </Box>
  );
};

export default Step3;
