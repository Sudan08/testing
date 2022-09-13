import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CookieProvider from '../../helpers/cookieHelper';
import { IAuthState } from '../../interfaces';

const initialState: IAuthState = {
  refreshToken: CookieProvider.getCookie('rmsRefresh') || null,
  accessToken: CookieProvider.getCookie('rmsAccess') || null,
  scope: CookieProvider.getCookie('rmsScope') || null,
  isAuthenticated: Boolean(CookieProvider.getCookie('rmsRefresh')) || false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { ...initialState },
  reducers: {
    setInitialCredentials: (
      state: IAuthState,
      action: PayloadAction<{
        refreshToken: string;
        accessToken: string;
        scope: string;
        rememberMe?: boolean;
      }>
    ) => {
      document.cookie = `rmsRefresh=${action.payload.refreshToken}`;
      document.cookie = `rmsAccess=${action.payload.accessToken}`;
      if (action.payload.rememberMe) {
        document.cookie = `rmsRefresh=${
          action.payload.refreshToken
        }; expires=${new Date(
          Date.now() + 1000 * 60 * 60 * 24 * 7
        ).toUTCString()}`;
        document.cookie = `rmsAccess=${
          action.payload.accessToken
        }; expires=${new Date(
          Date.now() + 1000 * 60 * 60 * 24 * 7
        ).toUTCString()}`;
        document.cookie = `rmsScope=${action.payload.scope}; expires=${new Date(
          Date.now() + 1000 * 60 * 60 * 24 * 7
        ).toUTCString()}`;
      }
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
      state.scope = action.payload.scope;
      state.isAuthenticated = true;
    },

    setNewToken: (
      state: IAuthState,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      document.cookie = `rmsRefresh=${action.payload.refreshToken}`;
      document.cookie = `rmsAccess=${action.payload.accessToken}`;
      state.refreshToken = action.payload.refreshToken;
      state.accessToken = action.payload.accessToken;
    },

    // logout
    logout: (state: IAuthState, action: PayloadAction) => {
      document.cookie = `rmsRefresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `rmsAccess=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
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
