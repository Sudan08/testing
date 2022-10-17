import { TimeIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { Schedule } from 'akar-icons';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiUpload } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';
import { addSchedulePageBreadcrumbNav } from '../../data/breadcrumbDatas';
import { ISchedule } from '../../interfaces';
import { usePostScheduleMutation } from './scheduleApiSlice';
import { addSchedule } from './scheduleSlice';

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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ISchedule>();
  const [uploadFile, setUploadFile] = useState<boolean | string>(false);
  const [searchedParams] = useSearchParams();
  const queryStartTime = searchedParams.get('start_time');
  const { isOpen, onToggle } = useDisclosure();
  const isFileDragging = useMemo(() => isOpen, [isOpen]);
  const placeholderColor = useColorModeValue('gray', '#fff');
  const containerBgColor = useColorModeValue('white', 'gray.800');
  const [postSchedule, { isLoading }] = usePostScheduleMutation();
  const dispatch = useDispatch();
  const backgroundColor = useColorModeValue(
    isFileDragging ? 'green.100' : '#fff',
    isFileDragging ? 'green.500' : 'gray.800'
  );
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    console.log(acceptedFiles);
  }, []);

  useEffect(() => {
    if (queryStartTime) {
      setValue('startTime', queryStartTime);
    }
  }, []);

  const { getRootProps, acceptedFiles, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: onToggle,
    onDragLeave: onToggle,
  });
  const toast = useToast();

  const handleScheduleAdd = async (values: ISchedule) => {
    const response = await postSchedule(values).unwrap();
    if (response.message) {
      dispatch(addSchedule(values));
      toast({
        title: 'Schedule Added',
        description: response.message,
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    } else {
      toast({
        title: 'Failed to add schedule',
        description: response.message,
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

  return (
    <VStack height={`100%`} width={`100%`}>
      <chakra.div width={`100%`} height={`100%`}>
        <BreadcrumbNav orderedNavItems={addSchedulePageBreadcrumbNav} />
        <VStack
          as={Box}
          padding={`1rem`}
          justifyContent={[`flex-start`, `flex-start`, `center`]}
          width={`100%`}
        >
          <Box width={'100%'} display={'flex'} justifyContent={'flex-end'}>
            <Button
              onClick={() => {
                setUploadFile(true);
              }}
              leftIcon={<BiUpload />}
              variant="outline"
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
            backgroundColor={containerBgColor}
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
              <FormControl isInvalid={Boolean(errors.courseType)}>
                <FormLabel htmlFor="course">Course</FormLabel>
                <Select
                  placeholder="Course"
                  id="course"
                  // type='text'
                  {...register('courseType', {
                    required: 'Course is required',
                  })}
                >
                  <option value={'BIBM'}>BIBM</option>
                  <option value={'BIT'}>BIT</option>
                </Select>
                <FormErrorMessage>
                  {errors.courseType && errors.courseType.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.group)}>
                <FormLabel htmlFor="group">Group</FormLabel>
                <Select
                  placeholder="Group"
                  id="group"
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
              <FormControl isInvalid={Boolean(errors.blockName)}>
                <FormLabel htmlFor="block">Block</FormLabel>
                <Select
                  placeholder="Block"
                  id="block"
                  // type='text'
                  {...register('blockName', {
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
                  {errors.blockName && errors.blockName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.roomName)}>
                <FormLabel htmlFor="room">Room</FormLabel>
                <Select
                  placeholder="Room"
                  id="room"
                  // type='text'
                  {...register('roomName', {
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
                  {errors.roomName && errors.roomName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.teacherName)}>
                <FormLabel htmlFor="lecturer_name">Lecturer Name</FormLabel>
                <Input
                  placeholder="Lecturer Name"
                  id="lecturer_name"
                  type="string"
                  {...register('teacherName', {
                    required: 'Lecturer Name is required',
                  })}
                />
                <FormErrorMessage>
                  {errors.teacherName && errors.teacherName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.moduleName)}>
                <FormLabel htmlFor="module_name">Module Name</FormLabel>
                <Select
                  placeholder="Module Name"
                  id="module_name"
                  {...register('moduleName', {
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
                  {errors.moduleName && errors.moduleName.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.startTime)}>
                <FormLabel htmlFor="class_start_time">
                  Class Start Time
                </FormLabel>
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
                    onFocus={(e: any) => (e.target.type = 'time')}
                    backgroundColor={`blackAlpha.50`}
                    outline={`1px solid #DFDFDF`}
                    borderRadius={'4px'}
                    _placeholder={{
                      color: placeholderColor,
                    }}
                    {...register('startTime', {
                      required: 'Start time is required',
                    })}
                    onBlur={(e: any) => (e.target.type = 'text')}
                  />
                </InputGroup>

                <FormErrorMessage>
                  {errors.startTime && errors.startTime.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.endTime)}>
                <FormLabel htmlFor="class_end_time">Class End Time</FormLabel>
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
                    type="string"
                    {...register('endTime', {
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
                  {errors.endTime && errors.endTime.message}
                </FormErrorMessage>
              </FormControl>{' '}
              <FormControl isInvalid={Boolean(errors.classType)}>
                <FormLabel htmlFor="class_type">Class Type</FormLabel>
                <Select
                  id="class_type"
                  placeholder="Select Class Type"
                  {...register('classType', {
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
                  {errors.classType && errors.classType.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.day)}>
                <FormLabel htmlFor="day">Day</FormLabel>
                <Input
                  id="day"
                  placeholder="Enter Day"
                  type="string"
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
                <datalist id="days">
                  <option value="Sunday" />
                  <option value="Monday" />
                  <option value="Tuesday" />
                  <option value="Wednesday" />
                  <option value="Thursday" />
                  <option value="Friday" />
                  <option value="Saturday" />
                </datalist>
                <FormErrorMessage>
                  {errors.day && errors.day.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.status)}>
                <FormLabel htmlFor="status">Status</FormLabel>
                <Select
                  id="status"
                  {...register('status', {
                    required: 'Status is required',
                  })}
                  placeholder="Select Status"
                  backgroundColor={'blackAlpha.50'}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  <option value={'UPCOMMING'}>UPCOMMING</option>
                  <option value={'RUNNING'}>ACTIVE</option>
                </Select>

                <FormErrorMessage>
                  {errors.status && errors.status.message}
                </FormErrorMessage>
              </FormControl>
              <VStack
                justifyContent={`flex-end`}
                width={`100%`}
                height={`100%`}
              >
                <Button
                  type={`submit`}
                  transition={`0.2s`}
                  color="white"
                  _hover={{
                    backgroundColor: `#4bbd00`,
                  }}
                  backgroundColor="#74C043"
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
            className="container"
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
                    htmlFor="excel_file"
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
