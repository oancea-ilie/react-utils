import Controller from '@components/Controller';
import Protected from '@components/data/Protected';
import { Container } from '@mui/joy';

function Home() {
  return (
    <Container disableGutters>
      <Protected>
        <Controller />
      </Protected>
    </Container>
  );
}

export default Home;
