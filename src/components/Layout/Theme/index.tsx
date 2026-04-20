import { FC, ReactElement, ReactNode } from 'react';

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

interface Properties {
  children: ReactNode;
}

export const DuskEmbrace = {
  CARBON_BLACK: '#172121',
  CHARCOAL_BLUE: '#444554',
  GREY: '#7f7b82',
  LILAC_ASH: '#bfacb5',
  ALMOND_SILK: '#e5d0cc',
};

export const theme = {};

export const ThemeProvider: FC<Properties> = ({ children }): ReactElement => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
