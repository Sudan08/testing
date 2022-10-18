import { Box, Center, Show, Spinner, VStack } from '@chakra-ui/react';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from '../../app/store';
import { useGetAllSchedulesQuery } from '../../features/schedules/scheduleApiSlice';
import { setAllSchedules } from '../../features/schedules/scheduleSlice';
import { TopBar } from '../MobileNav';
import Sidebar from '../Sidebar';

const AdminLayout = () => {
  const { data: allSchedules } = useGetAllSchedulesQuery(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allSchedules) {
      dispatch(setAllSchedules(allSchedules));
    }
  }, [allSchedules]);

  return (
    <VStack width={`100%`} overflowY={`hidden`}>
      <Show breakpoint={`(max-width:768px)`}>
        <TopBar />
      </Show>
      <Box display={`flex`} width={`100%`} overflowY={`hidden`}>
        <Show breakpoint={`(min-width:768px)`}>
          <Sidebar />
        </Show>
        <Box
          height={['100%', '100%', '100vh', '100vh', `100vh`]}
          overflowY={['hidden', 'hidden', 'scroll', 'scroll', `scroll`]}
          padding={[`0.5rem`, `1rem`, `1rem`, `2rem`]}
          width={`100%`}
          backgroundImage={`url('/images/background.png')`}
          backgroundSize={'cover'}
          backgroundPosition={'center'}
          backgroundRepeat={'no-repeat'}
        >
          <Suspense
            fallback={
              <Center minH={'60vh'}>
                <Spinner />
              </Center>
            }
          >
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </VStack>
  );
};

export default AdminLayout;
