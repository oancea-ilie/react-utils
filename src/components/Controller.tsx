import { Button, Grid, Stack, Typography } from '@mui/joy';
import useTemplate from '@hooks/useTemplate';
import DataWrapper from './data/DataWrapper';

function Controller() {
  const {
    templates,
    isError,
    isLoading,
    handleAddTemplate,
    handleDeleteTemplate,
    handleUpdateTemplate,
  } = useTemplate();

  return (
    <Grid container>
      <Grid xs={2}>
        <Stack spacing={0.5}>
          <Button
            disabled={isError}
            onClick={handleAddTemplate}
            color="success"
          >
            Add
          </Button>
          <Button
            disabled={isError}
            onClick={handleUpdateTemplate}
            color="primary"
          >
            Update
          </Button>
          <Button
            disabled={isError}
            onClick={handleDeleteTemplate}
            color="danger"
          >
            Delete
          </Button>
        </Stack>
      </Grid>
      <Grid xs={10}>
        <DataWrapper data={templates} isLoading={isLoading} isError={isError}>
          <Grid container>
            {templates.map((template) => (
              <Grid xs={2} key={template.id}>
                <Typography level="body-xs">{template.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </DataWrapper>
      </Grid>
    </Grid>
  );
}

export default Controller;
