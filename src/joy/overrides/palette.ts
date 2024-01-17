import { ColorSystemOptions } from '@mui/joy/styles/extendTheme';
import { DefaultColorScheme, ExtendedColorScheme } from '@mui/joy/styles/types';

export const colorSchemes: Partial<
  Record<DefaultColorScheme | ExtendedColorScheme, ColorSystemOptions>
> = {
  dark: {
    palette: {
      common: {},
      danger: {},
      neutral: {},
      primary: {
        solidBg: '#30362F',
        solidColor: '#DA7422',
        solidHoverBg: '#12211C',
        solidHoverColor: '#DA7422',
        solidActiveBg: '#12211C',
        solidActiveColor: '#DA7422',
        100: '#0D1913',
        200: '#12211C',
        300: '#162924',
        400: '#1B312D',
        500: '#30362F',
        600: '#475542',
        700: '#5B6C54',
        800: '#707F67',
        900: '#85927A',
      },
      success: {},
      text: {
        primary: '#FFFBDB',
        secondary: '#A59132',
      },
      warning: {},
    },
  },
  light: {
    palette: {
      common: {},
      danger: {},
      neutral: {},
      primary: {
        solidBg: '#30362F',
        solidColor: '#DA7422',
        solidHoverBg: '#12211C',
        solidHoverColor: '#DA7422',
        solidActiveBg: '#12211C',
        solidActiveColor: '#DA7422',
        100: '#0D1913',
        200: '#12211C',
        300: '#162924',
        400: '#1B312D',
        500: '#30362F',
        600: '#475542',
        700: '#5B6C54',
        800: '#707F67',
        900: '#85927A',
      },
      success: {},
      text: {
        primary: '#FFFBDB',
        secondary: '#A59132',
      },
      warning: {},
    },
  },
};
