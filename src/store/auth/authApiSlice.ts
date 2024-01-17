import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  LoginDto,
  LoginResponseDto,
  loginResponseSchema,
} from '@typescript/dtos/AuthDto';
import { UserT, userSchema } from '@typescript/models/UserT';
import {
  ApiSliceE,
  ApiTagE,
  EndpointE,
  ReqMethodE,
} from '@typescript/enums/ApiE';
import { API } from '@utils/constants';
import { authorizedHeaders } from './jwt';

export const authApiSlice = createApi({
  reducerPath: ApiSliceE.AUTH,
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: (headers) => authorizedHeaders(headers),
  }),
  tagTypes: [ApiTagE.AUTH],
  endpoints: (builder) => ({
    getCurrentUser: builder.query<UserT, void>({
      query: () => EndpointE.CURRENT_USER,
      providesTags: [ApiTagE.AUTH],
      transformResponse: (response: UserT) => userSchema.parse(response),
    }),
    login: builder.mutation({
      query: (payload: LoginDto) => ({
        url: EndpointE.LOGIN,
        method: ReqMethodE.POST,
        body: payload,
      }),
      transformResponse: (response: LoginResponseDto) =>
        loginResponseSchema.parse(response),
    }),
  }),
});

export const { useGetCurrentUserQuery, useLoginMutation } = authApiSlice;
