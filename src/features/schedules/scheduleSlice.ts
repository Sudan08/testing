import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISchedule, IScheduleState } from '../../interfaces';

const initialState: IScheduleState = {
  allSchedules: [],
};

const scheduleSlice = createSlice({
  name: 'schedules',
  initialState: { ...initialState },
  reducers: {
    setAllSchedules: (
      state: IScheduleState,
      action: PayloadAction<ISchedule[]>
    ) => {
      state.allSchedules = action.payload;
    },

    // add schedule
    addSchedule: (state: IScheduleState, action: PayloadAction<ISchedule>) => {
      state.allSchedules.push(action.payload);
    },

    // remove schedule
    removeSchedule: (
      state: IScheduleState,
      action: PayloadAction<{ routineID: string }>
    ) => {
      state.allSchedules = state.allSchedules.filter(
        (routine) => routine._id !== action.payload.routineID
      );
    },

    // edit schedule
    editSchedule: (state: IScheduleState, action: PayloadAction<ISchedule>) => {
      state.allSchedules = state.allSchedules.map((routine) => {
        if (routine._id === action.payload._id) {
          return action.payload;
        }
        return routine;
      });
    },
  },
});

export const { setAllSchedules, addSchedule, removeSchedule, editSchedule } =
  scheduleSlice.actions;
export default scheduleSlice.reducer;

export const selectAllSchedules = (state: any) => state.schedules.allSchedules;
