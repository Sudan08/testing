import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  VStack,
  useColorModeValue,
  Divider,
  Button,
  Center,
  PopoverCloseButton,
  Spinner,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { useState } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllSchedules } from '../features/schedules/scheduleSlice';
import { convertTime } from '../helpers';
import { ISchedule } from '../interfaces';

const ScheduleTime: React.FC<{ time: string }> = ({ time }) => {
  const [isActive, setIsActive] = useState(false);
  const textColor = useColorModeValue('gray.800', 'white');
  const allSchedules = useSelector(selectAllSchedules);
  const routines = useMemo(() => {
    if (allSchedules) {
      return allSchedules.filter(
        (schedule: ISchedule) => schedule.startTime === time
      );
    }
    return [];
  }, [time, allSchedules]);

  const navigate = useNavigate();
  const handleAddSchedule = () => {
    navigate('/add-schedule?start_time=' + time);
  };
  if (!routines) {
    return <Spinner />;
  }
  return (
    <>
      <Popover onClose={() => setIsActive(false)}>
        <PopoverTrigger>
          <Button
            background={`inherit`}
            // borderRadius={'0'}
            display={'flex'}
            cursor={`pointer`}
            transition="all 0.2s ease-in-out"
            // outline={`1px solid #e6e6e6`}
            alignItems={`center`}
            justifyContent={`center`}
            width={`100%`}
            height={`100%`}
            minW={`150px`}
            minH={`150px`}
            borderRadius={'12px'}
            _focus={{
              outline: '2px solid #74C043',
            }}
            color={isActive || routines.length > 0 ? '#fff' : `#959595`}
            backgroundColor={
              isActive ? `#2F4858` : routines.length > 0 ? '#74C043' : ''
            }
            onClick={() => setIsActive(!isActive)}
            _hover={{
              color: `#fff`,
              backgroundColor: '#2F4858',
            }}
          >
            <chakra.span fontSize={`1rem`} fontWeight={`600`}>
              {convertTime(time, 'am/pm')}
            </chakra.span>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          _focus={{
            outline: '2px solid #74C043',
          }}
          boxShadow={'0px 0px 4px rgba(0 0 0 / 0.25)'}
          width={'100%'}
          color={'black'}
          maxH={'400px'}
          overflowY={'scroll'}
        >
          <PopoverArrow height={'20px'} />
          <PopoverCloseButton color={textColor} />

          <PopoverBody marginTop={'1.5rem'} padding={'1rem'}>
            <VStack alignItems={'flex-start'} gap={'0.5rem'}>
              {routines.length > 0 ? (
                routines.map((routine: any, index: any) => (
                  <VStack key={index} alignItems={'flex-start'}>
                    <PopoverScheduleDetail textColor={textColor} {...routine} />
                    <Divider />
                  </VStack>
                ))
              ) : (
                <VStack>
                  <chakra.p>No routines scheduled for this time</chakra.p>
                  <Center marginTop={'0.5rem'}>
                    <Button
                      colorScheme={'brand'}
                      onClick={() => handleAddSchedule()}
                    >
                      Add Schedule?
                    </Button>
                  </Center>
                </VStack>
              )}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ScheduleTime;

interface IPopoverScheduleDetailPropType extends ISchedule {
  textColor: string;
}

export const PopoverScheduleDetail: React.FC<
  IPopoverScheduleDetailPropType
> = ({ moduleName, roomName, startTime, group, textColor }) => (
  <VStack alignItems={'flex-start'} gap={'0'}>
    <chakra.h1
      marginTop={0}
      color={textColor}
      fontSize={[`0.6rem`, '0.8rem', `1rem`]}
      fontWeight={'700'}
    >
      {moduleName}
    </chakra.h1>
    <chakra.h2
      marginTop={'0px !important'}
      color={'#74C043'}
      fontSize={[`0.8rem`, '1rem', `1.2rem`]}
      fontWeight={'800'}
    >
      {roomName}
    </chakra.h2>
    <chakra.h3 color={textColor} marginTop={'0px !important'}>
      {group} ({convertTime(startTime, 'am/pm')})
    </chakra.h3>
  </VStack>
);
