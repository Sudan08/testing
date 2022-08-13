import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  refreshToken: string | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

const initialState: IAuthState = {
  refreshToken: null,
  accessToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { ...initialState },
  reducers: {
    setInitialCredentials: (
      state: IAuthState,
      action: PayloadAction<{ refreshToken: string; accessToken: string }>
    ) => {
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },

    setNewToken: (
      state: IAuthState,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
    },
    // logout
    logout: (state: IAuthState, action: PayloadAction) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});
export const { setInitialCredentials, logout, setNewToken } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: any) => state.auth.isAuthenticated;
export const selectAccessToken = (state: any) => state.auth.accessToken;
export const selectRefreshToken = (state: any) => state.auth.refreshToken;
