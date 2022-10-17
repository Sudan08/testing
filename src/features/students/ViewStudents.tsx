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
  useColorModeValue,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';
import { viewStudentPageBreadcrumbNav } from '../../data/breadcrumbDatas';

type tHeadProps = {
  children: React.ReactNode;
  noBorder?: boolean;
};

type tRowProps = {
  children: React.ReactNode;
  index: number;
};

const THead: React.FC<tHeadProps> = ({ children, noBorder = false }) => (
  <Th
    fontSize={'1rem'}
    fontWeight={'bold'}
    borderRight={noBorder ? 'none' : '1px solid #BCBCBC'}
    py={'1.5rem'}
    pl={'2.5rem'}
  >
    {children}
  </Th>
);
const TRow: React.FC<tRowProps> = ({ children, index }) => {
  const accentColor = useColorModeValue('#FAFAFA', 'gray.800');
  const backgroundColor = useColorModeValue('#fff', 'gray.800');
  return (
    <Tr backgroundColor={index % 2 === 0 ? backgroundColor : accentColor}>
      {children}
    </Tr>
  );
};
const TData: React.FC<PropsWithChildren> = ({ children }) => (
  <Td pl={'2.5rem'}>{children}</Td>
);
const ViewStudentsPage = () => {
  const backgroundColor = useColorModeValue('#FAFAFA', 'gray.800');
  return (
    <chakra.div height={`100%`}>
      <BreadcrumbNav orderedNavItems={viewStudentPageBreadcrumbNav} />
      <VStack as={Box} padding={`1rem`} height={'100%'} width={`100%`}>
        <Box
          borderRadius={`12px`}
          width={`100%`}
          maxW={`1200`}
          boxShadow={[`none`, `none`, `0px 0px 15px rgba(0, 0, 0, 0.10)`]}
          backgroundColor={backgroundColor}
          mt={'2rem'}
        >
          <Heading fontSize={['1.4rem', '1.6rem', '2rem']} margin={`1.8rem 0`}>
            <HStack alignItems={`center`} justifyContent={`center`}>
              <CustomHeading>BIT </CustomHeading>
              <Text fontSize='2xl' color='#74C043'>
                (Level X)
              </Text>
            </HStack>
          </Heading>

          <Box id='table' height={'fit-content'}>
            <TableContainer
              maxH={'60vh'}
              mr={'8'}
              ml={'8'}
              mb={'8'}
              overflowY={`scroll`}
              height={'100%'}
              border={'1px solid #74C043'}
              boxShadow={[`none`, `none`, `0px 0px 5px rgba(0, 0, 0, 0.20)`]}
              borderRadius={`6px`}
            >
              <Table height={'100%'}>
                <Thead position={'sticky'} top={0} zIndex={4} color={'#2F4858'}>
                  <Tr>
                    <THead>Student Name</THead>
                    <THead>Student Class</THead>
                    <THead>Student Email</THead>
                    <THead noBorder={true}>Student ID</THead>
                  </Tr>
                </Thead>
                <Tbody fontSize={'1rem'} fontWeight={'medium'}>
                  <TRow index={0}>
                    <TData>Student 1</TData>
                    <TData>LXCGY</TData>
                    <TData>npcs3s4sX00001</TData>
                    <TData>20X972X</TData>
                  </TRow>
                  <TRow index={1}>
                    <TData>Student 1</TData>
                    <TData>LXCGY</TData>
                    <TData>npcs3s4sX00001</TData>
                    <TData>20X972X</TData>
                  </TRow>
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
