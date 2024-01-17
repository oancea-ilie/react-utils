import {
  useGetCurrentUserQuery,
  useLoginMutation,
} from '@store/auth/authApiSlice';
import { Jwt } from '@store/auth/jwt';
import { LoginDto } from '@typescript/dtos/AuthDto';
import { useMemo } from 'react';

function useAuth() {
  const [login, { isLoading: isLoginLoading, isError: isLoginError }] =
    useLoginMutation();

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useGetCurrentUserQuery();

  const isError = useMemo(
    () => isLoginError || isUserError,
    [isUserError, isLoginError],
  );

  const isLoading = useMemo(
    () => isLoginLoading || isUserLoading,
    [isUserLoading, isLoginLoading],
  );

  const handleLogin = async (loginDto: LoginDto) => {
    const loginData = await login(loginDto).unwrap();
    if (loginData) {
      Jwt.set(loginData.token);
    }
  };

  return {
    handleLogin,
    user,
    isLoading,
    isError,
  };
}

export default useAuth;
