import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { z } from 'zod';
/* eslint-disable @typescript-eslint/no-explicit-any */
export type ReduxError = FetchBaseQueryError | SerializedError | undefined;

const fetchErrorSchema = z.object({
  status: z.string(),
  error: z.string(),
});

const badReqErrorSchema = z.object({
  status: z.number(),
  data: z.object({
    message: z.string(),
  }),
});

export type FetchError = z.infer<typeof fetchErrorSchema>;
export type BadReqError = z.infer<typeof badReqErrorSchema>;

export const isFetchError = (error: unknown) =>
  fetchErrorSchema.safeParse(error).success;

export const isBadReqError = (error: unknown) =>
  badReqErrorSchema.safeParse(error).success;

const DEFAULT_ERROR = 'Something went wrong..';

export const displayReduxError = (error: ReduxError) => {
  if (isFetchError(error)) {
    return 'Server offline';
  }
  if (isBadReqError(error)) {
    return (error as BadReqError).data.message;
  }
  return DEFAULT_ERROR;
};
