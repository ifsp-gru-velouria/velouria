import { PropsWithChildren } from 'react';

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

export const DuskEmbrace = {
    CARBON_BLACK: '#172121',
    CHARCOAL_BLUE: '#444554',
    GREY: '#7f7b82',
    LILAC_ASH: '#bfacb5',
    ALMOND_SILK: '#e5d0cc',
};

export const theme = {};

export const ThemeProvider = ({ children }: PropsWithChildren) => <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>;
