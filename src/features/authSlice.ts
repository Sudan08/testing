import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuthState {
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
  initialState,
  reducers: {
    // login
    login: (
      state: IAuthState,
      action: PayloadAction<{ refreshToken: string; accessToken: string }>
    ) => {
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },

    // logout
    logout: (state: IAuthState, action: PayloadAction) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state: IAuthState) => state.isAuthenticated;
export const selectAccessToken = (state: IAuthState) => state.accessToken;
export const selectRefreshToken = (state: IAuthState) => state.refreshToken;

