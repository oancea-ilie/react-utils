import { Box } from '@mui/joy';
import { ReactNode, useEffect } from 'react';
import Login from '@pages/Login';
import { useNavigate } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import LoadingCom from './LoadingCom';

interface Props {
  children: ReactNode;
}

function Protected({ children }: Props) {
  const { user, isLoading } = useAuth();

  const navigate = useNavigate();

  const displayData = () => {
    if (isLoading) return <LoadingCom />;

    if (!user) return <Login />;

    return children;
  };

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  return <Box className="Protected">{displayData()}</Box>;
}

export default Protected;
