import { JSX, PropsWithChildren } from 'react';

import styled from 'styled-components';

import Header from './Header';

import Footer from './Footer';

import { DuskEmbrace, ThemeProvider } from './Theme';

const StyledContainer = styled.div`
    align-items: center;
    background-color: ${DuskEmbrace.CHARCOAL_BLUE};
    color: ${DuskEmbrace.ALMOND_SILK};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledMain = styled.main`
    min-height: 100vh;
    max-width: 860px;
`;

function Providers({ children }: PropsWithChildren) {
    const components = [
        ThemeProvider,
    ];

    return components.reduceRight((previousChildren, Component) => {
        return <Component>{previousChildren}</Component>;
    }, children) as JSX.Element;
}

export function RootLayout({ children }: PropsWithChildren) {
    return (
        <StyledContainer>
            <Header />
                <StyledMain>
                    <Providers>{children}</Providers>
                </StyledMain>
            <Footer />
        </StyledContainer>
    );
}
