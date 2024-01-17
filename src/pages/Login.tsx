import LoadingCom from '@components/data/LoadingCom';
import useAuth from '@hooks/useAuth';
import useNotify from '@hooks/useNotify';
import { Button, Container, Input, Stack, Typography } from '@mui/joy';
import { LoginDto } from '@typescript/dtos/AuthDto';
import { displayReduxError } from '@typescript/shared/ReduxT';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { handleLogin, isError, isLoading: isLoadingAuth, user } = useAuth();

  const navigate = useNavigate();

  const { notifyError } = useNotify();

  const [email, setEmail] = useState<string>('user@example.com');

  const [password, setPassword] = useState<string>('123String');

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const loginFn = async (loginDto: LoginDto) => {
    setIsLoading(true);
    try {
      await handleLogin(loginDto);
      navigate('/');
    } catch (e) {
      notifyError(displayReduxError(e || isError));
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoadingAuth) {
      setIsLoading(false);
    }
  }, [isLoadingAuth]);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return isLoading ? (
    <LoadingCom />
  ) : (
    <Container>
      <Stack
        justifyContent="center"
        width="100%"
        height="100vh"
        alignItems="center"
      >
        <Typography mb={3} level="h1">
          Login
        </Typography>
        <Stack minWidth={400} spacing={1}>
          <Input
            type="text"
            placeholder="Email.."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Password.."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button size="lg" onClick={() => loginFn({ email, password })}>
            Login
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Login;
