import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { chakra } from '@chakra-ui/system';
import { useSchedule } from '../hooks/useSchedule';

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
  toast,
  VStack,
} from '@chakra-ui/react';
import { Schedule } from 'akar-icons';
import { TimeIcon } from '@chakra-ui/icons';
import CustomHeading from '../components/CustomHeading';

const EditSchedule = () => {
  const { id } = useParams();

  const { getScheduleById } = useSchedule();
  const schedule = useMemo(() => getScheduleById(id), [getScheduleById, id]);

  const handleScheduleAdd = async (e) => {
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
    const response = await EditSchedule(formData);
    if (response.status === 200) {
      console.log(response);

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
    } else {
      toast({
        title: 'Failed to edit schedule',
        description: response.data,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  const levels = [
    {
      label: 'Four',
      value: '4',
    },
    {
      label: 'Five',
      value: '5',
    },
    {
      label: 'Six',
      value: '6',
    },
  ];

  const groups = ['L5CG7', 'L5CG6'];
  const blocks = ['Wolverhampton', 'HCK'];
  const rooms = ['Kirtipur', 'Basantapur', 'Dudley'];
  // const classTypes = ['Lecture', 'Tutorial', 'Workshop']
  const modules = ['Human Computer Interaction', 'Object Oriented Programming'];

  // form values
  const [level, setLevel] = useState('');
  const [group, setGroup] = useState('');
  const [block, setBlock] = useState('');
  const [room, setRoom] = useState('');
  // const [classType, setClassType] = useState('')
  const [lecturerName, setLecturerName] = useState(null);
  const [moduleName, setModuleName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  useEffect(() => {
    if (schedule) {
      setLecturerName(schedule.lecturer_name);
    }
  }, [schedule]);

  if (schedule === null) {
    return <Spinner />;
  } else if (schedule === {}) {
    return <>404</>;
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
              onSubmit={async (e) => handleScheduleAdd(e)}
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
                <label htmlFor='level'>Level</label>
                <Select
                  id='level'
                  onChange={(e) => setLevel(e.target.value)}
                  value={level}
                  placeholder='Select Level'
                >
                  {levels.map((level, index) => (
                    <option key={index} value={level.value}>
                      {level.label}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='group'>Group</label>
                <Select
                  id='group'
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  placeholder='Select Group'
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
                  onChange={(e) => setBlock(e.target.value)}
                  placeholder='Select Block'
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
                  onChange={(e) => setRoom(e.target.value)}
                  placeholder='Select Room'
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
                  onChange={(e) => setLecturerName(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='module_name'>Module Name</label>
                <Select
                  id='module_name'
                  placeholder='Select Module Name'
                  value={moduleName}
                  onChange={(e) => setModuleName(e.target.value)}
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
                <InputGroup>
                  <InputLeftElement
                    pointerEvents={`none`}
                    children={<TimeIcon />}
                  />
                  <Input
                    id={`class_start_time`}
                    placeholder={`Select Time`}
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    onFocus={(e) => (e.target.type = 'time')}
                    onBlur={(e) => (e.target.type = 'text')}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <label htmlFor='class_end_time'>Class End Time</label>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents={`none`}
                    children={<TimeIcon />}
                  />
                  <Input
                    id={`class_end_time`}
                    placeholder={`Select Time`}
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    onFocus={(e) => (e.target.type = 'time')}
                    onBlur={(e) => (e.target.type = 'text')}
                  />
                </InputGroup>
              </FormControl>{' '}
              <VStack
                justifyContent={`flex-end`}
                width={`100%`}
                height={`100%`}
              >
                <Button
                  type={`submit`}
                  transition={`0.2s`}
                  colorScheme={`brand`}
                  _hover={{
                    backgroundColor: `#4bbd00`,
                  }}
                  width={`100%`}
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
export default EditSchedule;
