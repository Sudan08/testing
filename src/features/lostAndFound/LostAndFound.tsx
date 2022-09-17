import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
  Box,
  Heading,
  HStack,
  Divider,
  Button,
  FormControl,
  FormLabel,
  Select,
  Input,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import { LostandFoundPageBreadcrumbNav } from '../../data/breadcrumbDatas';
import { AiOutlineEdit, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const LostAndFound = () => {
  const item = {
    sn: '1',
    item: 'lre',
    category: 'fd',
    locatiokn: 'dfdf',
    status: 'open',
    found: '12',
    claim: '321',
  };
  return (
    <Box width={`100%`}>
      <BreadcrumbNav orderedNavItems={LostandFoundPageBreadcrumbNav} />
      <VStack padding={`1rem`} height={`100%`}>
        {' '}
        width ={`100%`}
        <Box
          borderRadius={`12px`}
          width={`100%`}
          boxShadow={[`none`, `none`, `0px 0px 4px rgba(0, 0, 0, 0.25)`]}
          maxW={`1200`}
          padding={'1rem'}
          height={`100%`}
        >
          <Heading fontSize={['1rem', '1.2rem', '1.4rem']} mt={`1rem`}>
            <HStack alignItems={`left`} justifyContent={`left`}>
              <p>Items List</p>
            </HStack>
          </Heading>

          <Flex
            alignItems={'center'}
            flexDirection={['column', 'column', 'column', 'column', 'row']}
            width={'100%'}
            justifyContent={'space-between'}
          >
            <Flex
              flexDirection={['column', 'column', 'column', 'row']}
              gap={'1rem'}
              width={`100%`}
            >
              <FormControl>
                <FormLabel>Categories</FormLabel>
                <Select placeholder='All Categories'>
                  <option>Electronics</option>
                  <option>Books</option>
                  <option>Accessories</option>
                  <option>Electronics</option>
                  <option>Clothing</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Status</FormLabel>
                <Select placeholder='All'>
                  <option>Completed</option>
                  <option>Pending</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Month</FormLabel>
                <Select placeholder='Jan'>
                  <option>Feb</option>
                  <option>March</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Year</FormLabel>
                <Select placeholder='2022'>
                  <option>2021</option>
                  <option>2023</option>
                </Select>
              </FormControl>
            </Flex>
            <Box
              alignItems={`flex-end`}
              justifyContent={`flex-end`}
              width={`100%`}
              margin={`1rem`}
            >
              <HStack
                alignItems={'flex-end'}
                justifyContent={{ sm: 'flex-start', xl: 'flex-end' }}
              >
                <FormControl maxWidth={{ lg: '300px' }}>
                  <FormLabel>Search Now</FormLabel>
                  <Input
                    placeholder='Search Now'
                    borderTopEndRadius={0}
                    borderBottomEndRadius={0}
                  />
                </FormControl>
                <IconButton
                  marginInlineStart={'0 !important'}
                  borderTopStartRadius={0}
                  borderBottomStartRadius={0}
                  colorScheme={'brand'}
                  aria-label='Search database'
                  icon={<SearchIcon />}
                />
              </HStack>
            </Box>
          </Flex>

          <Box id='table' height={'55vh'} width={`100%`}>
            <TableContainer
              maxH={'60vh'}
              overflowY={`scroll`}
              height={'100%'}
              width={`100%`}
            >
              <Table variant='simple' height={'auto'}>
                <Thead
                  backgroundColor={'brand.700'}
                  position={'sticky'}
                  top={0}
                  zIndex={4}
                >
                  <Tr>
                    <Th color={'white'}>S.N.</Th>
                    <Th color={'white'}>Item Name</Th>
                    <Th color={'white'}>Category</Th>
                    <Th color={'white'}>Location</Th>
                    <Th color={'white'}>Status</Th>
                    <Th color={'white'}>Found Date</Th>
                    <Th color={'white'}>Claim Date</Th>
                  </Tr>
                </Thead>

                <Tbody position={'sticky'} top={0} zIndex={3}>
                  <Tr>
                    <Td>{item.sn}</Td>
                    <Td>{item.item}</Td>
                    <Td>{item.sn}</Td>
                    <Td>{item.sn}</Td>
                    <Td>{item.sn}</Td>
                    <Td>{item.sn}</Td>
                    <Td>{item.sn}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Divider />
          <HStack
            justifyContent={`flex-start`}
            gap={'0.5rem'}
            align-items={`end`}
            width={'100%'}
            margin={'1rem 0'}
          >
            <Link to={'/lost-and-found/add'}>
              <Button
                leftIcon={<AiOutlinePlus size={'20px'} />}
                colorScheme={'brand'}
              >
                Create New
              </Button>
            </Link>
            <Button
              leftIcon={<AiOutlineEdit size={'20px'} />}
              backgroundColor={'#2F4858'}
              _hover={{ backgroundColor: '#2F4960' }}
              _focus={{ backgroundColor: '#2F4960' }}
              color={'white'}
            >
              Edit Item
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default LostAndFound;
