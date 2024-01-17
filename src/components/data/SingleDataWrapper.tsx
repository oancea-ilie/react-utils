import { ReactNode } from 'react';
import { Box } from '@mui/joy';
import { ReduxError } from '@typescript/shared/ReduxT';
import LoadingCom from './LoadingCom';
import ErrorCom from './ErrorCom';

interface Props {
  children: ReactNode;
  isLoading: boolean;
  isError?: boolean;
  error: ReduxError;
}

function SingleDataWrapper({ children, isLoading, isError, error }: Props) {
  if (isLoading) {
    return <LoadingCom />;
  }

  if (isError) {
    return <ErrorCom error={error} />;
  }

  return <Box className="single-data-wrapper">{children}</Box>;
}

export default SingleDataWrapper;
