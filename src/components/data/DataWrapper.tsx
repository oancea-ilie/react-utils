import { ReactNode } from 'react';
import { Box } from '@mui/joy';
import { ReduxError } from '@typescript/shared/ReduxT';
import LoadingCom from './LoadingCom';
import ErrorCom from './ErrorCom';
import NoDataCom from './NoDataCom';

interface Props<T> {
  data: T[];
  children: ReactNode;
  isLoading: boolean;
  isError: boolean;
  error?: ReduxError;
}

function DataWrapper<T>({
  children,
  data,
  isLoading,
  isError,
  error,
}: Props<T>) {
  if (isLoading) {
    return <LoadingCom />;
  }

  if (isError) {
    return <ErrorCom error={error} />;
  }

  if (data.length === 0) {
    return <NoDataCom />;
  }

  return <Box className="data-wrapper">{children}</Box>;
}

export default DataWrapper;
