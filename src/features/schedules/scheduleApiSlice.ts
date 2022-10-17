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
        url: `/admin/routines/${routineID}`,
        method: 'GET',
      }),
    }),
    postSchedule: builder.mutation<{ message: string }, Partial<ISchedule>>({
      query: (data) => ({
        url: '/admin/postRoutineData/',
        method: 'POST',
        body: { ...data },
      }),
    }),
    deleteSchedule: builder.mutation<{ message: string }, Partial<{ routineID: string }>>({
      query: (routineID) => ({
        url: '/admin/deleteRoutineData/',
        method: 'DELETE',
        body: { routineID },
      }),
    }),
    putSchedule: builder.mutation<ISchedule, Partial<ISchedule>>({
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
