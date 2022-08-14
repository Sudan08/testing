import React, { useEffect } from 'react';
import { Box, Show, VStack } from '@chakra-ui/react';
import { TopBar } from '../MobileNav';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import { useGetAllSchedulesQuery } from '../../features/schedules/scheduleApiSlice';
import { useDispatch } from 'react-redux';
import { setAllSchedules } from '../../features/schedules/scheduleSlice';

const AdminLayout = () => {
  const { data: allSchedules } = useGetAllSchedulesQuery(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allSchedules) {
      dispatch(setAllSchedules(allSchedules));
    }
  }, [allSchedules]);

  return (
    <VStack width={`100%`} overflowY={`hidden`}>
      <Show breakpoint={`(max-width:625px)`}>
        <TopBar />
      </Show>
      <Box display={`flex`} width={`100%`} overflowY={`hidden`}>
        <Show breakpoint={`(min-width:625px)`}>
          <Sidebar />
        </Show>
        <Box
          height={['100%', '100vh', '100vh', '100vh', `100vh`]}
          overflowY={['hidden', 'scroll', 'scroll', 'scroll', `scroll`]}
          padding={[`0.5rem`, `1rem`, `1rem`, `2rem`]}
          width={`100%`}
          backgroundImage={`url('/images/background.png')`}
          backgroundSize={'cover'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
        >
          <Outlet />
        </Box>
      </Box>
    </VStack>
  );
};

export default AdminLayout;
