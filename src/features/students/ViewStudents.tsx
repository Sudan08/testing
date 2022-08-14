import React from 'react';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  VStack,
  Box,
  Heading,
  HStack,
  Divider,
  chakra,
} from '@chakra-ui/react';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';
import { viewStudentPageBreadcrumbNav } from '../../data/breadcrumbDatas';

const ViewStudentsPage = () => {
  return (
    <chakra.div height={`100%`}>
      <BreadcrumbNav orderedNavItems={viewStudentPageBreadcrumbNav} />
      <VStack as={Box} padding={`1rem`} height={'100%'} width={`100%`}>
        <Box
          borderRadius={`12px`}
          width={`100%`}
          boxShadow={[`none`, `none`, `0px 0px 4px rgba(0, 0, 0, 0.25)`]}
          maxW={`1200`}
        >
          <Heading fontSize={['1.4rem', '1.6rem', '2rem']} margin={`1rem 0`}>
            <HStack alignItems={`center`} justifyContent={`center`}>
              <CustomHeading>BIT </CustomHeading>
              <Text fontSize='2xl' color='#74C043'>
                (Level X)
              </Text>
            </HStack>
          </Heading>
          <Divider />

          <Box id='table' height={'fit-content'}>
            <TableContainer
              maxH={'60vh'}
              mr={'8'}
              ml={'8'}
              mb={'8'}
              overflowY={`scroll`}
              height={'100%'}
              border={'1px solid #74C043'}
              borderRadius={`12px`}
              backgroundColor={'white'}
            >
              <Table variant='striped' height={'100%'}>
                <Thead
                  position={'sticky'}
                  top={0}
                  zIndex={4}
                  fontWeight={'700'}
                  color={'#2F4858'}
                  backgroundColor={'white'}
                >
                  <Tr>
                    <Th borderRight={'1px solid #BCBCBC'}>Student Name</Th>
                    <Th borderRight={'1px solid #BCBCBC'}>Student Class</Th>
                    <Th borderRight={'1px solid #BCBCBC'}>Student Email</Th>
                    <Th>Student ID</Th>
                  </Tr>
                </Thead>
                <Tbody fontSize={'0.8rem'} fontWeight={'500'} color={'#2F4858'}>
                  <Tr>
                    <Td>Student 1</Td>
                    <Td
                      maxW={['100px', '100px', '100%', '100%']}
                      overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                    >
                      LXCGY
                    </Td>
                    <Td>npcs3s4sX00001</Td>
                    <Td>20X972X</Td>
                  </Tr>
                  <Tr>
                    <Td>Student 1</Td>
                    <Td
                      maxW={['100px', '100px', '100%', '100%']}
                      overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                    >
                      LXCGY
                    </Td>
                    <Td>npcs3s4sX00001</Td>
                    <Td>20X972X</Td>
                  </Tr>
                  <Tr>
                    <Td>Student 1</Td>
                    <Td
                      maxW={['100px', '100px', '100%', '100%']}
                      overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                    >
                      LXCGY
                    </Td>
                    <Td>npcs3s4sX00001</Td>
                    <Td>20X972X</Td>
                  </Tr>
                  <Tr>
                    <Td>Student 1</Td>
                    <Td
                      maxW={['100px', '100px', '100%', '100%']}
                      overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                    >
                      LXCGY
                    </Td>
                    <Td>npcs3s4sX00001</Td>
                    <Td>20X972X</Td>
                  </Tr>
                  <Tr>
                    <Td>Student 1</Td>
                    <Td
                      maxW={['100px', '100px', '100%', '100%']}
                      overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                    >
                      LXCGY
                    </Td>
                    <Td>npcs3s4sX00001</Td>
                    <Td>20X972X</Td>
                  </Tr>
                  <Tr>
                    <Td>Student 1</Td>
                    <Td
                      maxW={['100px', '100px', '100%', '100%']}
                      overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                    >
                      LXCGY
                    </Td>
                    <Td>npcs3s4sX00001</Td>
                    <Td>20X972X</Td>
                  </Tr>
                  <Tr>
                    <Td>Student 1</Td>
                    <Td
                      maxW={['100px', '100px', '100%', '100%']}
                      overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                    >
                      LXCGY
                    </Td>
                    <Td>npcs3s4sX00001</Td>
                    <Td>20X972X</Td>
                  </Tr>
                  <Tr>
                    <Td>Student 1</Td>
                    <Td
                      maxW={['100px', '100px', '100%', '100%']}
                      overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                    >
                      LXCGY
                    </Td>
                    <Td>npcs3s4sX00001</Td>
                    <Td>20X972X</Td>
                  </Tr>
                  <Tr>
                    <Td>Student 1</Td>
                    <Td
                      maxW={['100px', '100px', '100%', '100%']}
                      overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                    >
                      LXCGY
                    </Td>
                    <Td>npcs3s4sX00001</Td>
                    <Td>20X972X</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </VStack>
    </chakra.div>
  );
};

export default ViewStudentsPage;
