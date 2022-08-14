import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CookieProvider from '../../helpers/cookieHelper';

const initialState: IAuthState = {
  refreshToken: CookieProvider.getCookie('rms_refresh') || null,
  accessToken: CookieProvider.getCookie('rms_access') || null,
  isAuthenticated: Boolean(CookieProvider.getCookie('rms_refresh')) || false,
};
console.log(initialState);

const authSlice = createSlice({
  name: 'auth',
  initialState: { ...initialState },
  reducers: {
    setInitialCredentials: (
      state: IAuthState,
      action: PayloadAction<{
        refreshToken: string;
        accessToken: string;
        rememberMe?: boolean;
      }>
    ) => {
      document.cookie = `rms_refresh=${action.payload.refreshToken}`;
      document.cookie = `rms_access=${action.payload.accessToken}`;
      if (action.payload.rememberMe) {
        document.cookie = `rms_refresh=${
          action.payload.refreshToken
        }; expires=${new Date(
          Date.now() + 1000 * 60 * 60 * 24 * 7
        ).toUTCString()}`;
        document.cookie = `rms_access=${
          action.payload.accessToken
        }; expires=${new Date(
          Date.now() + 1000 * 60 * 60 * 24 * 7
        ).toUTCString()}`;
      }
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
      state.isAuthenticated = true;
    },

    setNewToken: (
      state: IAuthState,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      document.cookie = `rms_refresh=${action.payload.refreshToken}`;
      document.cookie = `rms_access=${action.payload.accessToken}`;
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
    },

    // logout
    logout: (state: IAuthState, action: PayloadAction) => {
      document.cookie = `rms_refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `rms_access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
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
