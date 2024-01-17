import { extendTheme } from '@mui/joy/styles';
import { colorSchemes } from './palette';
import { typography } from './typography';
import { components } from './components';
import { radius } from './radius';

export const theme = extendTheme({
  colorSchemes,
  typography,
  components,
  radius,
  breakpoints: {},
});
