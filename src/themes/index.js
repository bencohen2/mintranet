// @flow
import {lightThemePrimitives, createTheme} from 'baseui/themes';

const primaryFontFamily =
  'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';

const overrides = {
    name: 'theme with some overrides',
    colors: {
        inputFill: lightThemePrimitives.mono100,
    }
};

export const Theme = createTheme(
    {
      ...lightThemePrimitives,
      primaryFontFamily,
    },
    overrides
);
  