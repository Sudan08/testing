import { apiSlice } from '../../app/api/apiSlice';

export const scheduleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSchedules: builder.query({
      query: () => '/routines',
      keepUnusedDataFor: 5,
      transformResponse: (response: any) => {
        if (response.data) {
          return response.data;
        } else {
          return [];
        }
      },
    }),
    getScheduleById: builder.query({
      query: (routineID) => ({
        url: `/admin/routines/${routineID}`,
        method: 'GET',
      }),
    }),
    postSchedule: builder.mutation({
      query: (data) => ({
        url: '/admin/postRoutineData/',
        method: 'POST',
        body: { ...data },
      }),
    }),
    deleteSchedule: builder.mutation({
      query: (routineID) => ({
        url: '/admin/deleteRoutineData/',
        method: 'DELETE',
        body: { routineID },
      }),
    }),
    putSchedule: builder.mutation({
      query: (data) => ({
        url: '/admin/updateRoutineData/',
        method: 'PUT',
        body: { ...data },
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
  useGetScheduleByIdQuery,
  usePostScheduleMutation,
  useDeleteScheduleMutation,
  usePutScheduleMutation,
} = scheduleApiSlice;
