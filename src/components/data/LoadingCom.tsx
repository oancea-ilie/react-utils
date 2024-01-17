import { CircularProgress, Stack } from '@mui/joy';

function LoadingCom() {
  return (
    <Stack justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress
        color="primary"
        determinate={false}
        size="lg"
        variant="outlined"
      />
    </Stack>
  );
}

export default LoadingCom;
