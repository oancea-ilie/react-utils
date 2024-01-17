import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TemplateT, templatesSchema } from '@typescript/models/TemplateT';
import {
  CreateTemplateDto,
  UpdateTemplateDto,
} from '@typescript/dtos/TemplatesDto';
import { authorizedHeaders } from '@store/auth/jwt';
import {
  ApiSliceE,
  ApiTagE,
  EndpointE,
  ReqMethodE,
} from '@typescript/enums/ApiE';
import { API } from '@utils/constants';

export const templateApiSlice = createApi({
  reducerPath: ApiSliceE.TEMPLATE,
  baseQuery: fetchBaseQuery({
    baseUrl: API,
    prepareHeaders: authorizedHeaders,
  }),
  tagTypes: [ApiTagE.TEMPLATE],
  endpoints: (builder) => ({
    getTemplates: builder.query<TemplateT[], void>({
      query: () => EndpointE.TEMPLATES,
      providesTags: [ApiTagE.TEMPLATE],
      transformResponse: (response: unknown) => templatesSchema.parse(response),
    }),
    addTemplate: builder.mutation({
      query: (payload: CreateTemplateDto) => ({
        url: EndpointE.TEMPLATES,
        method: ReqMethodE.POST,
        body: payload,
      }),
      invalidatesTags: [ApiTagE.TEMPLATE],
    }),
    updateTemplate: builder.mutation({
      query: (payload: UpdateTemplateDto) => {
        const { id, ...body } = payload;
        return {
          url: `${EndpointE.TEMPLATES}/${id}`,
          method: ReqMethodE.PUT,
          body,
        };
      },
      invalidatesTags: [ApiTagE.TEMPLATE],
    }),
    deleteTemplate: builder.mutation({
      query: (id: number) => ({
        url: `${EndpointE.TEMPLATES}/${id}`,
        method: ReqMethodE.DELETE,
      }),
      invalidatesTags: [ApiTagE.TEMPLATE],
    }),
  }),
});

export const {
  useGetTemplatesQuery,
  useAddTemplateMutation,
  useDeleteTemplateMutation,
  useUpdateTemplateMutation,
} = templateApiSlice;
