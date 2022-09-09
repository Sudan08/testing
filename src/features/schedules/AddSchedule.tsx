import React, {
  ChangeEvent,
  FocusEventHandler,
  FormEvent,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { chakra } from '@chakra-ui/system';
import {
  Box,
  Button,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useToast,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useColorModeValue,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { Schedule } from 'akar-icons';
import { TimeIcon } from '@chakra-ui/icons';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useSearchParams } from 'react-router-dom';
import { BiUpload } from 'react-icons/bi';
import { useDropzone, FileWithPath } from 'react-dropzone';
import { useCallback } from 'react';
import { convertTime } from '../../helpers';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';
import { useDispatch } from 'react-redux';
import { addSchedule } from './scheduleSlice';
import { usePostScheduleMutation } from './scheduleApiSlice';
import { addSchedulePageBreadcrumbNav } from '../../data/breadcrumbDatas';

const FilePreviewComponent: React.FC<{ acceptedFiles: FileWithPath[] }> = ({
  acceptedFiles,
}) => (
  <>
    {acceptedFiles.map((file) => (
      <chakra.li color={'green.600'} fontWeight={500} key={file.path}>
        {file.path} - {file.size} bytes
      </chakra.li>
    ))}
  </>
);

const AddSchedulePage = () => {
  const [uploadFile, setUploadFile] = useState<boolean | string>(false);
  const [searchedParams] = useSearchParams();
  const queryStartTime = searchedParams.get('start_time');
  const { isOpen, onToggle } = useDisclosure();
  const isFileDragging = useMemo(() => isOpen, [isOpen]);
  const placeholderColor = useColorModeValue('gray', '#fff');
  const [postSchedule, { isLoading }] = usePostScheduleMutation();
  const dispatch = useDispatch();

  const backgroundColor = useColorModeValue(
    isFileDragging ? 'green.100' : '#fff',
    isFileDragging ? 'green.500' : 'gray.800'
  );
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, acceptedFiles, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: onToggle,
    onDragLeave: onToggle,
  });
  const toast = useToast();

  const handleScheduleAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      course_type: courseType.trim(),
      module_name: moduleName.trim(),
      lecturer_name: lecturerName.trim(),
      group: group.trim(),
      room_name: room.trim(),
      block_name: block.trim(),
      day: day.trim(),
      start_time: startTime.trim(),
      end_time: endTime.trim(),
      class_type: classType.trim(),
    };
    console.log(formData);
    const response: { data?: Object; error?: Object } = await postSchedule(
      formData
    );
    if (response.data) {
      dispatch(
        addSchedule({
          courseType: courseType.trim(),
          moduleName: moduleName.trim(),
          lecturerName: lecturerName.trim(),
          group: group.trim(),
          roomName: room.trim(),
          blockName: block.trim(),
          day: day.trim(),
          startTime: startTime.trim(),
          endTime: endTime.trim(),
          classType: classType.trim(),
          status,
        })
      );
      toast({
        title: 'Schedule Added',
        description: 'Schedule has been added successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
      setModuleName('');
      setLecturerName('');
      setGroup('');
      setRoom('');
      setBlock('');
      setStartTime('');
      setEndTime('');
    } else {
      toast({
        title: 'Failed to add schedule',
        description: response.data,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const groups = ['L5CG7', 'L5CG6'];
  const blocks = ['Wolverhampton', 'HCK'];
  const rooms = ['Kirtipur', 'Basantapur', 'Dudley'];
  const classTypes = ['Lecture', 'Tutorial', 'Workshop'];
  const modules = ['Human Computer Interaction', 'Object Oriented Programming'];

  // form values
  const [group, setGroup] = useState('');
  const [block, setBlock] = useState('');
  const [room, setRoom] = useState('');
  const [classType, setClassType] = useState('');
  const [lecturerName, setLecturerName] = useState('');
  const [moduleName, setModuleName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [day, setDay] = useState('');
  const [status, setStatus] = useState('PENDING');
  const [courseType, setCourseType] = useState('');

  useEffect(() => {
    if (queryStartTime) {
      setStartTime(convertTime(queryStartTime));
    }
  }, [queryStartTime]);

  return (
    <VStack height={`100%`} width={`100%`}>
      <chakra.div width={`100%`} height={`100%`}>
        <BreadcrumbNav orderedNavItems={addSchedulePageBreadcrumbNav} />
        <VStack
          as={Box}
          padding={`1rem`}
          justifyContent={[`flex-start`, `flex-start`, `center`]}
          height={`100%`}
          width={`100%`}
        >
          <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}>
            <Button
              onClick={() => {
                setUploadFile(true);
              }}
              leftIcon={<BiUpload />}
              variant='outline'
              transition={`0.2s`}
              colorScheme={`brand`}
              _hover={{
                textColor: `#4bbd00`,
              }}
            >
              Upload File
            </Button>
          </Box>
          <br />

          <Box
            borderRadius={`12px`}
            width={`100%`}
            backgroundColor={'blackAlpha.50'}
            boxShadow={[`none`, `none`, `0px 0px 4px rgba(0, 0, 0, 0.25)`]}
            maxW={`1200`}
          >
            <Heading margin={`1rem 0`}>
              <HStack alignItems={`center`} justifyContent={`center`}>
                <Schedule color={'green'} strokeWidth={2} size={24} />
                <CustomHeading>Add Schedule</CustomHeading>
              </HStack>
            </Heading>
            <Divider />

            <chakra.form
              // mt={`2rem`}
              padding={[`0.5rem`, `0.5rem`, `1rem`, `2rem`, `3rem`]}
              onSubmit={async (e: FormEvent<HTMLFormElement>) =>
                handleScheduleAdd(e)
              }
              display={`grid`}
              gridTemplateColumns={[
                `repeat(1,1fr)`,
                `repeat(1,1fr)`,
                `repeat(2, 1fr)`,
              ]}
              rowGap={[`1rem`, `1rem`, `1rem`, `2rem`]}
              columnGap={[`1rem`, `2rem`, `2rem`, `4rem`]}
              placeItems={`center`}
            >
              <FormControl isRequired>
                <label htmlFor='courseType'>Course</label>
                <Select
                  id='courseType'
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setCourseType(e.target.value)
                  }
                  value={courseType}
                  placeholder='Select Course'
                  backgroundColor={'blackAlpha.50'}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  <option value={'BIBM'}>BIBM</option>
                  <option value={'BIT'}>BIT</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='group'>Group</label>
                <Select
                  id='group'
                  value={group}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setGroup(e.target.value)
                  }
                  placeholder='Select Group'
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  {groups.map((group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='block'>Block</label>
                <Select
                  id='block'
                  value={block}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setBlock(e.target.value)
                  }
                  placeholder='Select Block'
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  {blocks.map((block, index) => (
                    <option key={index} value={block}>
                      {block}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='room'>Room</label>
                <Select
                  id='room'
                  value={room}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setRoom(e.target.value)
                  }
                  placeholder='Select Room'
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  {rooms.map((room, index) => (
                    <option key={index} value={room}>
                      {room}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='lecturer_name'>Lecturer Name</label>
                <Input
                  type={`text`}
                  id={`lecturer_name`}
                  placeholder={`Lecturer Name`}
                  value={lecturerName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLecturerName(e.target.value)
                  }
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                  _placeholder={{
                    color: placeholderColor,
                  }}
                />
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='module_name'>Module Name</label>
                <Select
                  id='module_name'
                  placeholder='Select Module Name'
                  value={moduleName}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setModuleName(e.target.value)
                  }
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  {modules.map((m, index) => (
                    <option key={index} value={m}>
                      {m}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='class_start_time'>Class Start Time</label>
                <InputGroup
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                  _placeholder={{
                    color: placeholderColor,
                  }}
                >
                  <InputLeftElement
                    pointerEvents={`none`}
                    children={<TimeIcon />}
                  />
                  <Input
                    id={`class_start_time`}
                    placeholder={`Select Time`}
                    value={startTime}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setStartTime(e.target.value)
                    }
                    onFocus={(e: any) => (e.target.type = 'time')}
                    backgroundColor={`blackAlpha.50`}
                    outline={`1px solid #DFDFDF`}
                    borderRadius={'4px'}
                    onBlur={(e: any) => (e.target.type = 'text')}
                    _placeholder={{
                      color: placeholderColor,
                    }}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='class_end_time'>Class End Time</label>
                <InputGroup
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  <InputLeftElement
                    pointerEvents={`none`}
                    children={<TimeIcon />}
                  />
                  <Input
                    id={`class_end_time`}
                    placeholder={`Select Time`}
                    value={endTime}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setEndTime(e.target.value)
                    }
                    onFocus={(e: any) => {
                      if (e.target instanceof HTMLInputElement)
                        e.target.type = 'time';
                    }}
                    onBlur={(e: any) => (e.target.type = 'text')}
                    backgroundColor={`blackAlpha.50`}
                    outline={`1px solid #DFDFDF`}
                    borderRadius={'4px'}
                    _placeholder={{
                      color: placeholderColor,
                    }}
                  />
                </InputGroup>
              </FormControl>{' '}
              <FormControl isRequired>
                <label htmlFor='class_type'>Class Type</label>
                <Select
                  id='class_type'
                  placeholder='Select Class Type'
                  value={classType}
                  onChange={(e: any) => setClassType(e.target.value)}
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  {classTypes.map((c, index) => (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='day'>Day</label>
                <Input
                  id='day'
                  placeholder='Enter Day'
                  value={day}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setDay(e.target.value)
                  }
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                  list={'days'}
                  _placeholder={{
                    color: placeholderColor,
                  }}
                />
                <datalist id='days'>
                  <option value='Sunday' />
                  <option value='Monday' />
                  <option value='Tuesday' />
                  <option value='Wednesday' />
                  <option value='Thursday' />
                  <option value='Friday' />
                  <option value='Saturday' />
                </datalist>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='status'>Status</label>
                <Select
                  id='status'
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setStatus(e.target.value)
                  }
                  value={status}
                  placeholder='Select Status'
                  backgroundColor={'blackAlpha.50'}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  <option value={'PENDING'}>PENDING</option>
                  <option value={'ACTIVE'}>ACTIVE</option>
                </Select>
              </FormControl>
              <VStack
                justifyContent={`flex-end`}
                width={`100%`}
                height={`100%`}
              >
                <Button
                  type={`submit`}
                  transition={`0.2s`}
                  color='white'
                  _hover={{
                    backgroundColor: `#4bbd00`,
                  }}
                  backgroundColor='#74C043'
                  width={`100%`}
                  isLoading={isLoading}
                >
                  Save Schedule
                </Button>
              </VStack>
            </chakra.form>
          </Box>
        </VStack>
      </chakra.div>

      <Modal
        isCentered
        isOpen={Boolean(uploadFile)}
        onClose={() => setUploadFile('')}
      >
        <ModalOverlay />
        <ModalContent backgroundColor={backgroundColor}>
          <ModalHeader>Upload File</ModalHeader>
          <ModalCloseButton />
          <ModalBody
            // {...getRootProps}
            display={'flex'}
            gap={'0.5rem'}
            justifyContent={'flex-start'}
            className='container'
          >
            <Box
              {...getRootProps({
                className: 'dropzone',
              })}
              width={'100%'}
            >
              <input {...getInputProps()} onChange={(e) => console.log(e)} />
              <HStack width={`100%`} justifyContent={'center'}>
                <AiOutlineCloudUpload size={24} />
                <chakra.span>
                  Drag and Drop or click to
                  <chakra.label
                    cursor={'pointer'}
                    htmlFor='excel_file'
                    color={'green'}
                  >
                    {' '}
                    Browse{' '}
                  </chakra.label>
                </chakra.span>
              </HStack>
              <Divider />
              <chakra.aside
                display={'flex'}
                flexDir={'column'}
                alignItems={'flex-start'}
                pb={'0.5rem'}
              >
                <chakra.h2
                  fontWeight={700}
                  fontSize={'1.2rem'}
                  color={'green.600'}
                  marginTop={'0.5rem'}
                >
                  File
                </chakra.h2>
                <chakra.span>
                  {acceptedFiles.length === 0 && 'No file yet!'}
                </chakra.span>
                <chakra.ul>
                  <FilePreviewComponent acceptedFiles={acceptedFiles} />
                </chakra.ul>
              </chakra.aside>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default AddSchedulePage;
