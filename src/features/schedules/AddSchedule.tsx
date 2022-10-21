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
  Select,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { Schedule } from 'akar-icons';
import { FocusEvent, lazy, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiUpload } from 'react-icons/bi';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/store';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';
import { addSchedulePageBreadcrumbNav } from '../../data/breadcrumbDatas';
import {
  blocks,
  classStatus,
  classTypes,
  courses,
  groups,
  modules,
  rooms,
} from '../../data/scheduleData';
import { ISchedule } from '../../interfaces';
import { usePostScheduleMutation } from './scheduleApiSlice';
import { addSchedule } from './scheduleSlice';
const DUploadByExcelFile = lazy(
  () => import('../../components/schedule/UploadByExcel')
);

const AddSchedulePage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ISchedule>();
  const [uploadFile, setUploadFile] = useState(false);

  const blockName = watch('blockName');
  const availableRooms = useMemo(() => {
    switch (blockName) {
      case 'HCK':
        return rooms.hck;
      case 'WLV':
        return rooms.wlv;
      default:
        return [];
    }
  }, [blockName]);

  const courseName = watch('courseType');
  const availableModules = useMemo(() => {
    switch (courseName) {
      case 'BIT':
        return modules.bit;
      case 'BIBM':
        return modules.bibm;
      case 'IMBA':
        return modules.imba;
      default:
        return [];
    }
  }, [courseName]);

  const [searchedParams] = useSearchParams();
  const queryStartTime = searchedParams.get('start_time');
  const placeholderColor = useColorModeValue('gray', '#fff');
  const containerBgColor = useColorModeValue('white', 'gray.800');
  const [postSchedule, { isLoading }] = usePostScheduleMutation();

  useEffect(() => {
    if (queryStartTime) {
      setValue('startTime', queryStartTime);
    }
  }, []);

  const toast = useToast();
  const dispatch = useAppDispatch();
  const handleScheduleAdd = async (values: ISchedule) => {
    postSchedule(values)
      .unwrap()
      .then((data) => {
        toast({
          title: 'Schedule Added',
          description: data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
        });
        dispatch(addSchedule(values));
        reset();
      })
      .catch((error) => {
        toast({
          title: 'Failed to add schedule',
          description: error.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right',
          size: '24px',
        });
      });
  };

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
                  id="course"
                  {...register('courseType', {
                    required: 'Course is required',
                  })}
                >
                  <option value="">Select Course</option>
                  {courses.map((course, index) => (
                    <option key={index}>{course}</option>
                  ))}
                </Select>
                <FormErrorMessage>
                  {errors.courseType && errors.courseType.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(errors.group)}>
                <FormLabel htmlFor="group">Group</FormLabel>
                <Select
                  id="group"
                  // type='text'
                  {...register('group', {
                    required: 'Group is required',
                  })}
                >
                  <option value="">Select Group</option>
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
                  id="block"
                  {...register('blockName', {
                    required: 'Block is required',
                  })}
                >
                  <option value="">Select block</option>
                  {blocks.map((block, index) => (
                    <option key={index} value={block.value}>
                      {block.name}
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
                  id="room"
                  {...register('roomName', {
                    required: 'Room is required',
                  })}
                >
                  <option value="">Select Room</option>
                  {availableRooms.map((room, index) => (
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
                  id="module_name"
                  {...register('moduleName', {
                    required: 'Module Name is required',
                  })}
                >
                  <option value="">Select Module Name</option>
                  {availableModules.map((m, index) => (
                    <option key={index}>{m.label}</option>
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
                  <InputLeftElement pointerEvents={`none`}>
                    <TimeIcon />
                  </InputLeftElement>
                  <Input
                    id={`class_start_time`}
                    placeholder={`Select Time`}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) =>
                      (e.target.type = 'time')
                    }
                    backgroundColor={`blackAlpha.50`}
                    outline={`1px solid #DFDFDF`}
                    borderRadius={'4px'}
                    _placeholder={{
                      color: placeholderColor,
                    }}
                    {...register('startTime', {
                      required: 'Start time is required',
                    })}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
                      (e.target.type = 'text')
                    }
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
                  <InputLeftElement pointerEvents={`none`}>
                    <TimeIcon />
                  </InputLeftElement>
                  <Input
                    id={`class_end_time`}
                    placeholder={`Select Time`}
                    type="string"
                    {...register('endTime', {
                      required: 'Class End Time is required',
                    })}
                    onFocus={(e: FocusEvent<HTMLInputElement>) => {
                      if (e.target instanceof HTMLInputElement)
                        e.target.type = 'time';
                    }}
                    onBlur={(e: FocusEvent<HTMLInputElement>) =>
                      (e.target.type = 'text')
                    }
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
                  {...register('classType', {
                    required: 'Class Type is required',
                  })}
                  backgroundColor={`blackAlpha.50`}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  <option value="">Select Class Type</option>
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
                  backgroundColor={'blackAlpha.50'}
                  outline={`1px solid #DFDFDF`}
                  borderRadius={'4px'}
                  marginTop={'0.5rem'}
                >
                  <option value="">Select Status</option>
                  {classStatus.map((status, index) => (
                    <option key={index}>{status}</option>
                  ))}
                </Select>

                <FormErrorMessage>
                  {errors.status && errors.status.message}
                </FormErrorMessage>
              </FormControl>
              <VStack
                justifyContent={errors.status ? 'center' : 'flex-end'}
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
      <DUploadByExcelFile
        uploadFile={uploadFile}
        setUploadFile={setUploadFile}
      />
    </VStack>
  );
};

export default AddSchedulePage;
