import React, {
  ChangeEvent,
  FormEvent,
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
  FormLabel,
  FormErrorMessage
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
import { useForm } from 'react-hook-form';


type schedulePayLoad ={
  course : string,
  group : string,
  block : string,
  room : string,
  lecturer_name : string,
  module_name : string,
  class_end_time : string,
  class_type:string,
  day:string,
  status : string
};
const { register, handleSubmit, watch, formState: { errors } } = useForm<schedulePayLoad>();

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

  const handleScheduleAdd = async (values: schedulePayLoad) => {

    const formData = {
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
          teacherName: lecturerName.trim(),
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
  const blocks = ['Wolverhampton', 'HERALD'];
  const rooms = ['Kirtipur', 'Basantapur', 'Dudley'];
  const classTypes = ['LECTURE', 'TUTORIAL', 'WORKSHOP'];
  const modules = [
    'Human Computer Interaction',
    'Object Oriented Programming',
    'FYP',
  ];

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
              onSubmit={handleSubmit(handleScheduleAdd)}
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
            <FormControl isInvalid={Boolean(errors.course)}>
            <FormLabel htmlFor='course'>Course</FormLabel>
            <Select
              placeholder='Course'
              id='course'
              // type='text'
              {...register('course', {
                required: 'Course is required',
              })}
            >
              <option value={'BIBM'}>BIBM</option>
              <option value={'BIT'}>BIT</option>
              </Select>
            <FormErrorMessage>
              {errors.course && errors.course.message}
            </FormErrorMessage>
          </FormControl>
              <FormControl isRequired>
              <FormLabel htmlFor='group'>Group</FormLabel>
                <Select
                placeholder='Group'
                id='group'
                // type='text'
                {...register('group', {
                required: 'Group is required',
                })}
                >
                  {groups.map((group, index) => (
                    <option key={index} value={group}>
                      {group}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                {errors.group && errors.group.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
              <FormLabel htmlFor='block'>Block</FormLabel>
              <Select
                placeholder='Block'
                id='block'
                // type='text'
                {...register('block', {
                required: 'Block is required',
                })}
                >
                  {blocks.map((block, index) => (
                    <option key={index} value={block}>
                      {block}
                    </option>
                  ))}
                  </Select>
                  <FormErrorMessage>
                  {errors.block && errors.block.message}
                  </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
              <FormLabel htmlFor='room'>Room</FormLabel>
                <Select
                placeholder='Room'
                id='room'
                // type='text'
                {...register('room', {
                required: 'Room is required',
                })}
                >
                  {rooms.map((room, index) => (
                    <option key={index} value={room}>
                      {room}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.room && errors.room.message}
                  </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
              <FormLabel htmlFor='lecturer_name'>Lecturer Name</FormLabel>
              <Input
              placeholder='Lecturer Name'
              id='lecturer_name'
              type='string'
              {...register('lecturer_name', {
                required: 'Lecturer Name is required',
              })}
              />
                <FormErrorMessage>
                  {errors.lecturer_name && errors.lecturer_name.message}
                  </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='module_name'>Module Name</FormLabel>
                <Select
                placeholder='Module Name'
                id='module_name'
                {...register('module_name', {
                required: 'Module Name is required',
                })}
                >
                  {modules.map((m, index) => (
                    <option key={index} value={m}>
                      {m}
                    </option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.module_name && errors.module_name.message}
                  </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='class_start_time'>Class Start Time</FormLabel>
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
                <FormLabel htmlFor='class_end_time'>Class End Time</FormLabel>
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
                    type='string'
                    {...register('class_end_time', {
                    required: 'Class End Time is required',
                    })}
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
                <FormErrorMessage>
                  {errors.module_name && errors.module_name.message}
                </FormErrorMessage>
              </FormControl>{' '}
              <FormControl isRequired>
                <FormLabel htmlFor='class_type'>Class Type</FormLabel>
                <Select
                  id='class_type'
                  placeholder='Select Class Type'
                  {...register('class_type', {
                    required: 'Class Type is required',
                    })}
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
                <FormErrorMessage>
                  {errors.class_type && errors.class_type.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='day'>Day</FormLabel>
                <Input
                  id='day'
                  placeholder='Enter Day'
                  type='string'
                  {...register('day', {
                  required: 'Day is required',
                  })}
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
                <FormErrorMessage>
                  {errors.day && errors.day.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor='status'>Status</FormLabel>
                <Select
                  id='status'
                  {...register('status', {
                    required: 'Status is required',
                  })}
                  placeholder='Select Status'
                  backgroundColor={'blackAlpha.50'}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  <option value={'UPCOMMING'}>UPCOMMING</option>
                  <option value={'RUNNING'}>ACTIVE</option>
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
