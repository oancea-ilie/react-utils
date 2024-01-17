import { Stack, Typography } from '@mui/joy';
import { ReduxError, displayReduxError } from '@typescript/shared/ReduxT';

interface Props {
  error?: ReduxError;
}

function ErrorCom({ error }: Props) {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <Typography level="h4" color="danger">
        {displayReduxError(error)}
      </Typography>
    </Stack>
  );
}

export default ErrorCom;
