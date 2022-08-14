import { apiSlice } from '../../app/api/apiSlice';

export const scheduleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSchedules: builder.query({
      query: () => '/routines/getRoutineData',
      keepUnusedDataFor: 5,
      transformResponse: (response: any) => {
        if (response.data) {
          return response.data.map(
            (routine: any): ISchedule => ({
              _id: routine._id,
              courseType: routine.course_type,
              moduleName: routine.module_name,
              lecturerName: routine.lecturerName,
              group: routine.group,
              roomName: routine.room_name,
              blockName: routine.block_name,
              startTime: routine.start_time,
              endTime: routine.end_time,
              day: routine.day,
              classType: routine.class_type,
            })
          );
        } else {
          return [];
        }
      },
    }),
    postSchedule: builder.mutation({
      query: (data) => ({
        url: '/admin/postRoutineData',
        method: 'POST',
        body: { ...data },
      }),
    }),
    deleteSchedule: builder.mutation({
      query: (routineID) => ({
        url: '/admin/deleteRoutineData',
        method: 'DELETE',
        body: { routineID },
      }),
    }),
    // getSchedulesByTime: builder.query({
    //   query: (time) => ({
    //     url: `/routines/getRoutineData?time=${time}`,
    //     method: 'GET',
    //   }),
    // }),
  }),
});

export const {
  useGetAllSchedulesQuery,
  usePostScheduleMutation,
  useDeleteScheduleMutation,
} = scheduleApiSlice;
