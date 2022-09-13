import { Spinner, useColorModeValue, useToast } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
  VStack,
  Box,
  Heading,
  HStack,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  chakra,
} from '@chakra-ui/react';

import { VscTrash } from 'react-icons/vsc';
import { SiGoogleclassroom } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { Pencil } from 'akar-icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSchedule, selectAllSchedules } from './scheduleSlice';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';
import { convertTime } from '../../helpers';
import { useDeleteScheduleMutation } from './scheduleApiSlice';
import { classesPageBreadcrumbNav } from '../../data/breadcrumbDatas';
import { IDeleteRoutineResponse, ISchedule } from '../../interfaces';
type statusType = 'Completed' | 'Ongoing' | 'Cancelled';

const ClassesPage = () => {
  const backgroundColor = useColorModeValue('#fff', 'gray.800');
  const [deleteModal, setDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | undefined | null>(
    null
  );
  const toast = useToast();

  const schedules = useSelector(selectAllSchedules);
  const [deleteSchedule, { isLoading }] = useDeleteScheduleMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getClassStatusColor = (status: statusType) => {
    if (status === 'Completed') {
      return 'green';
    } else if (status === 'Ongoing') {
      return 'orange';
    }
    return 'red';
  };

  const handleDelete = async () => {
    try {
      if (itemToDelete) {
        const res = (await deleteSchedule(
          itemToDelete
        )) as IDeleteRoutineResponse;
        if (res?.error) {
          throw new Error('Failed to delete routine!');
        }
        toast({
          title: 'Class Deleted !!!',
          description: 'The Class has been successfully deleted.',
          status: 'success',
          position: 'top-right',
          duration: 5000,
          isClosable: true,
        });
        dispatch(removeSchedule({ routineID: itemToDelete }));
        if (!isLoading) {
          setDeleteModal(false);
        }
      }
    } catch (err: any) {
      toast({
        title: 'Failed to delete class !!!',
        description: "Class couldn't be deleted.",
        status: 'error',
        position: 'top-right',
        duration: 5000,
        isClosable: true,
      });
      setDeleteModal(false);
    }
  };

  return (
    <chakra.div height={`100%`}>
      <BreadcrumbNav orderedNavItems={classesPageBreadcrumbNav} />
      <VStack as={Box} padding={`1rem`} height={'100%'} width={`100%`}>
        <Box
          borderRadius={`12px`}
          width={`100%`}
          // height={'100%'}
          boxShadow={[`none`, `none`, `0px 0px 4px rgba(0, 0, 0, 0.25)`]}
          maxW={`1200`}
        >
          <Heading fontSize={['1.4rem', '1.6rem', '2rem']} margin={`1rem 0`}>
            <HStack alignItems={`center`} justifyContent={`center`}>
              <SiGoogleclassroom color='#74C043' />
              <CustomHeading>Classes</CustomHeading>
            </HStack>
          </Heading>
          <Divider />

          <Box
            id='table'
            height={'fit-content'}
            boxShadow={[`none`, `none`, `0px 0px 15px rgba(0, 0, 0, 0.10)`]}
            backgroundColor={backgroundColor}
          >
            <TableContainer maxH={'60vh'} overflowY={`scroll`} height={'100%'}>
              <Table variant='simple' height={'100%'}>
                <Thead
                  backgroundColor={'brand.700'}
                  position={'sticky'}
                  top={0}
                  zIndex={4}
                >
                  <Tr>
                    <Th color={'white'}>S.N.</Th>
                    <Th color={'white'}>Module Name</Th>
                    <Th color={'white'}>Class</Th>
                    <Th color={'white'}>Group</Th>
                    <Th color={'white'}>Class Type</Th>
                    <Th color={'white'}>Status</Th>
                    <Th color={'white'}>Timings</Th>
                    <Th color={'white'}>Action</Th>
                  </Tr>
                </Thead>
                <Tbody fontSize={'0.8rem'}>
                  {schedules.length === 0 && isLoading ? (
                    <Tr>
                      <Td>
                        <Spinner />
                      </Td>
                    </Tr>
                  ) : (
                    schedules.map((item: ISchedule, index: number) => (
                      <Tr key={index + '-' + item._id}>
                        <Td>{index + 1}</Td>
                        <Td
                          maxW={['100px', '100px', '100%', '100%']}
                          overflowX={[`scroll`, `scroll`, `hidden`, `hidden`]}
                        >
                          {item.moduleName}
                        </Td>
                        <Td>{item.roomName}</Td>
                        <Td>{item.group}</Td>
                        <Td fontWeight={'bold'}>{item.classType}</Td>
                        <Td
                          fontWeight={'bold'}
                          color={getClassStatusColor('Completed')}
                        >
                          Completed
                        </Td>
                        <Td fontWeight={'semibold'}>
                          {convertTime(item.startTime, 'am/pm') +
                            ' - ' +
                            convertTime(item.endTime, 'am/pm')}
                        </Td>
                        <Td display={'flex'} gap={'0.5rem'}>
                          <IconButton
                            icon={<Pencil />}
                            aria-label='Edit'
                            size='sm'
                            colorScheme={'blue'}
                            onClick={() =>
                              navigate(`/schedule/edit/${item._id}`)
                            }
                          />
                          <IconButton
                            aria-label='Delete'
                            onClick={() => {
                              setItemToDelete(item._id);
                              setDeleteModal(true);
                            }}
                            className='btn-modal'
                            icon={<VscTrash />}
                            size='sm'
                            colorScheme={'red'}
                          />
                        </Td>
                      </Tr>
                    ))
                  )}
                </Tbody>
              </Table>
              {schedules.length === 0 && !isLoading && (
                <chakra.p width={'full'} textAlign={'center'} py={'1rem'}>
                  No Routines Found!
                </chakra.p>
              )}
            </TableContainer>
          </Box>
        </Box>
      </VStack>
      {/* </VStack> */}

      <Modal
        isCentered
        isOpen={deleteModal}
        onClose={() => setDeleteModal(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Delete Class </ModalHeader>
          <ModalCloseButton />

          <ModalBody>Do you want to delete this class?</ModalBody>

          <ModalFooter>
            <Button
              colorScheme='blue'
              mr={3}
              onClick={() => setDeleteModal(false)}
            >
              Close
            </Button>

            <Button
              isLoading={isLoading}
              colorScheme='red'
              mr={3}
              onClick={handleDelete}
            >
              Confirm Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </chakra.div>
  );
};

export default ClassesPage;
