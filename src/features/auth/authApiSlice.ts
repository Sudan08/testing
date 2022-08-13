import { apiSlice } from '../../app/api';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'admin/Login/',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});
