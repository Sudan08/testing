import { apiSlice } from '../../app/api/apiSlice';
import { ISchedule } from '../../interfaces';

export const scheduleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSchedules: builder.query({
      query: () => '/routines',
      keepUnusedDataFor: 5,
      transformResponse: (response: { data: ISchedule[] }) => {
        return response.data;
      },
    }),
    getScheduleById: builder.query({
      query: (routineID) => ({
        url: `/routines/${routineID}`,
        method: 'GET',
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    postSchedule: builder.mutation<any, Partial<ISchedule>>({
      query: (data) => ({
        url: '/admin/postRoutineData/',
        method: 'POST',
        body: { ...data },
      }),
    }),
    deleteSchedule: builder.mutation<
      { message: string },
      Partial<{ routineID: string }>
    >({
      query: (routineID) => ({
        url: `/admin/deleteRoutineData/?routineID=${routineID.routineID}`,
        method: 'DELETE',
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    putSchedule: builder.mutation<any, Partial<ISchedule>>({
      query: (data) => ({
        url: '/admin/updateRoutineData/',
        method: 'PUT',
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useGetAllSchedulesQuery,
  useGetScheduleByIdQuery,
  usePostScheduleMutation,
  useDeleteScheduleMutation,
  usePutScheduleMutation,
} = scheduleApiSlice;
