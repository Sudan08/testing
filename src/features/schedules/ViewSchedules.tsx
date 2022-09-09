import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/system';
import { BookClose } from 'akar-icons';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';
import ScheduleTime from '../../components/ScheduleTime';
import { viewSchedulePageBreadcrumbNav } from '../../data/breadcrumbDatas';
import { convertTime } from '../../helpers';
const times = [
  '7:00 AM',
  '8:00 AM',
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
];
const ViewSchedulePage = () => {
  return (
    <chakra.div height={`100%`} width={`100%`}>
      <BreadcrumbNav orderedNavItems={viewSchedulePageBreadcrumbNav} />
      <VStack
        as={Box}
        padding={`1rem`}
        justifyContent={[`flex-start`, `flex-start`, `center`]}
        height={`100%`}
        width={`100%`}
      >
        <VStack
          borderRadius={`12px`}
          width={`100%`}
          maxW={'1150px'}
          height={`fit-content`}
          boxShadow={[`none`, `none`, `0px 0px 15px rgba(0, 0, 0, 0.15)`]}
          backgroundColor={'white'}
        >
          <Heading margin={`1rem 0`}>
            <HStack alignItems={`center`} justifyContent={`center`}>
              <BookClose color='green' strokeWidth={3} size={24} />
              <CustomHeading>View Schedule</CustomHeading>
            </HStack>
          </Heading>
          <Divider />
          <Grid
            gridTemplateColumns={'repeat(auto-fit, minmax(150px, 1fr))'}
            minH={`60%`}
            width={`100%`}
            gap={'1rem'}
            padding={'0.5rem'}
            placeItems={'center'}
          >
            {times.map((time, index) => (
              <ScheduleTime time={convertTime(time)} key={index} />
            ))}
          </Grid>
        </VStack>
      </VStack>
    </chakra.div>
  );
};

export default ViewSchedulePage;
