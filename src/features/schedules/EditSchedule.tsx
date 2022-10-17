import { useParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { chakra } from '@chakra-ui/system';
import { useColorModeValue } from '@chakra-ui/react';
import {
  Spinner,
  Input,
  Box,
  Button,
  Divider,
  FormControl,
  Heading,
  HStack,
  InputGroup,
  InputLeftElement,
  Select,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Schedule } from 'akar-icons';
import { TimeIcon } from '@chakra-ui/icons';
import CustomHeading from '../../components/CustomHeading';
import { useGetScheduleByIdQuery } from './scheduleApiSlice';

const EditSchedulePage = () => {
  const toast = useToast();
  // getting schedule by id in the params
  const { id } = useParams();
  const { data, isLoading } = useGetScheduleByIdQuery(id);
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
  const [courseType, setCourseType] = useState('');

  const handleScheduleAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      module_name: moduleName.trim(),
      lecturer_name: lecturerName.trim(),
      group: group.trim(),
      room_name: room.trim(),
      block_name: block.trim(),
      start_time: startTime.trim(),
      end_time: endTime.trim(),
    };
    console.log(formData);
    // const response = await EditSchedule(formData);

    toast({
      title: 'Schedule Edited',
      description: 'Schedule has been edited successfully',
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

    toast({
      title: 'Failed to edit schedule',
      description: 'Failed to edit schedule',
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const placeholderColor = useColorModeValue('gray', '#fff');
  const groups = ['L5CG7', 'L5CG6'];
  const blocks = ['Wolverhampton', 'HCK'];
  const rooms = ['Kirtipur', 'Basantapur', 'Dudley'];
  const classTypes = ['Lecture', 'Tutorial', 'Workshop'];
  const modules = ['Human Computer Interaction', 'Object Oriented Programming'];

  if (data === null || isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <chakra.div width={`100%`} height={`100%`}>
        <VStack
          as={Box}
          padding={`1rem`}
          justifyContent={[`flex-start`, `flex-start`, `center`]}
          height={`100%`}
          width={`100%`}
        >
          <Box
            borderRadius={`12px`}
            width={`100%`}
            boxShadow={[`none`, `none`, `0px 0px 4px rgba(0, 0, 0, 0.25)`]}
            maxW={`1200`}
          >
            <Heading margin={`1rem 0`}>
              <HStack alignItems={`center`} justifyContent={`center`}>
                <Schedule strokeWidth={2} size={24} />
                <CustomHeading>Edit Schedule</CustomHeading>
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
                <label htmlFor="courseType">Course</label>
                <Select
                  id="courseType"
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setCourseType(e.target.value)
                  }
                  value={courseType}
                  placeholder="Select Course"
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
                <label htmlFor="group">Group</label>
                <Select
                  id="group"
                  value={group}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setGroup(e.target.value)
                  }
                  placeholder="Select Group"
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
                <label htmlFor="block">Block</label>
                <Select
                  id="block"
                  value={block}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setBlock(e.target.value)
                  }
                  placeholder="Select Block"
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
                <label htmlFor="room">Room</label>
                <Select
                  id="room"
                  value={room}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setRoom(e.target.value)
                  }
                  placeholder="Select Room"
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
                <label htmlFor="lecturer_name">Lecturer Name</label>
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
                <label htmlFor="module_name">Module Name</label>
                <Select
                  id="module_name"
                  placeholder="Select Module Name"
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
                <label htmlFor="class_start_time">Class Start Time</label>
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
                  >
                    children={<TimeIcon />}
                  </InputLeftElement>
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
                <label htmlFor="class_end_time">Class End Time</label>
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
                <label htmlFor="class_type">Class Type</label>
                <Select
                  id="class_type"
                  placeholder="Select Class Type"
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
                <label htmlFor="day">Day</label>
                <Input
                  id="day"
                  placeholder="Enter Day"
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
                <datalist id="days">
                  <option value="Sunday" />
                  <option value="Monday" />
                  <option value="Tuesday" />
                  <option value="Wednesday" />
                  <option value="Thursday" />
                  <option value="Friday" />
                  <option value="Saturday" />
                </datalist>
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
                // isLoading={isLoading}
                >
                  Save Schedule
                </Button>
              </VStack>
            </chakra.form>
          </Box>
        </VStack>
      </chakra.div>
    </>
  );
};
export default EditSchedulePage;
