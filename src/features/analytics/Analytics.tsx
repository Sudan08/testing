import { chakra } from '@chakra-ui/system';

import {
  Heading,
  HStack,
  VStack,
  Box,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
} from '@chakra-ui/react';

import {
  FaBookReader,
  FaChalkboardTeacher,
  FaGraduationCap,
} from 'react-icons/fa';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { faker } from '@faker-js/faker';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import BreadcrumbNav from '../../components/BreadcrumbNav';
import CustomHeading from '../../components/CustomHeading';
import { analyticsPageBreadcrumbNav } from '../../data/breadcrumbDatas';

const AnalyticsPage = () => {
  const data = [
    {
      name: 'Sunday',
      'Teachers Login': faker.datatype.number(100),
      'Students Login': faker.datatype.number(100),
    },
    {
      name: 'Monday',
      'Teachers Login': faker.datatype.number(100),
      'Students Login': faker.datatype.number(100),
    },
    {
      name: 'Tuesday',
      'Teachers Login': faker.datatype.number(100),
      'Students Login': faker.datatype.number(100),
    },
    {
      name: 'Wednesday',
      'Teachers Login': faker.datatype.number(100),
      'Students Login': faker.datatype.number(100),
    },
    {
      name: 'Thursday',
      'Teachers Login': faker.datatype.number(100),
      'Students Login': faker.datatype.number(100),
    },
    {
      name: 'Friday',
      'Teachers Login': faker.datatype.number(100),
      'Students Login': faker.datatype.number(100),
    },
    {
      name: 'Saturday',
      'Teachers Login': faker.datatype.number(100),
      'Students Login': faker.datatype.number(100),
    },
  ];
  return (
    <chakra.div width={`100%`} height={`100%`}>
      <BreadcrumbNav orderedNavItems={analyticsPageBreadcrumbNav} />
      <VStack
        as={Box}
        padding={`0.5rem`}
        justifyContent={[`flex-start`, `flex-start`, `center`]}
        width={`100%`}
      >
        <Grid
          padding={`0.5rem`}
          justifyContent={[`flex-start`, `flex-start`, `center`]}
          gap={'1rem '}
          width={`100%`}
          gridTemplateColumns={'repeat(auto-fit, minmax(150px, 1fr))'}
        >
          <HStack
            borderRadius={`12px`}
            width={`100%`}
            p={10}
            boxShadow={`0px 0px 4px rgba(0, 0, 0, 0.25)`}
            alignItems={`center`}
            justifyContent={`center`}
            padding={`1rem 1.5rem`}
            margin={'0 !important'}
            gap={'1rem'}
          >
            <chakra.span color={'whatsapp.600'}>
              <FaGraduationCap size={32} />
            </chakra.span>

            <Stat>
              <StatLabel>
                <chakra.h1>Total Courses</chakra.h1>
              </StatLabel>
              <StatNumber>5</StatNumber>
            </Stat>
          </HStack>{' '}
          <HStack
            borderRadius={`12px`}
            width={`100%`}
            p={10}
            boxShadow={`0px 0px 4px rgba(0, 0, 0, 0.25)`}
            alignItems={`center`}
            justifyContent={`center`}
            padding={`1rem 1.5rem`}
            margin={'0 !important'}
            gap={'1rem'}
          >
            <chakra.span color={'whatsapp.600'}>
              <FaChalkboardTeacher size={32} />
            </chakra.span>

            <Stat>
              <StatLabel>
                <chakra.h1>Total Teachers</chakra.h1>
              </StatLabel>
              <StatNumber>20</StatNumber>
            </Stat>
          </HStack>{' '}
          <HStack
            borderRadius={`12px`}
            width={`100%`}
            p={10}
            boxShadow={`0px 0px 4px rgba(0, 0, 0, 0.25)`}
            alignItems={`center`}
            justifyContent={`center`}
            padding={`1rem 1.5rem`}
            margin={'0 !important'}
            gap={'1rem'}
          >
            <chakra.span color={'whatsapp.600'}>
              <FaBookReader size={32} />
            </chakra.span>

            <Stat>
              <StatLabel>
                <chakra.h1>Total Students</chakra.h1>
              </StatLabel>
              <StatNumber>1300</StatNumber>
            </Stat>
          </HStack>
        </Grid>

        <Box
          borderRadius={`12px`}
          width={`100%`}
          boxShadow={[`none`, `none`, `0px 0px 4px rgba(0, 0, 0, 0.25)`]}
          maxW={`1440`}
          mt={`2rem`}
        >
          <Heading margin={`1rem 0`}>
            <HStack
              alignItems={`left`}
              justifyContent={`left`}
              padding={`0 1rem`}
            >
              <IoAnalyticsSharp color="84dd22" />
              <CustomHeading>Login Analytics</CustomHeading>
            </HStack>
          </Heading>
          <Divider />
          <Box width={`100%`} height={`400px`}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 50,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Teachers Login"
                  stroke="#8884d8"
                />
                <Line
                  type="monotone"
                  dataKey="Students Login"
                  stroke="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Box>
      </VStack>
    </chakra.div>
  );
};

export default AnalyticsPage;
