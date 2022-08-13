import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, setNewToken } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://rms-beta-test.herokuapp.com/api/v4',
  // credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const { auth } = getState() as any;
    const token = auth.accessToken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});


const baseQueryWithReAuth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    await api.dispatch(logout());
    result = await baseQuery(args, api, extraOptions);
  } else if (result?.error?.status === 403) {
    const res = await baseQuery(
      {
        url: '/RegenerateToken',
        headers: {
          Authorization: `Bearer ${api.getState().auth.accessToken}`,
        },
      },
      api,
      extraOptions
    );
    console.log(res);
    const data = res.data as ILoginResponse;
    if (data.token) {
      api.dispatch(
        setNewToken({
          accessToken: data.token.access_token,
          refreshToken: data.token.refresh_token,
        })
      );

      // retrying the request
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  reducerPath: 'api',
  endpoints: (builder) => ({}),
});
