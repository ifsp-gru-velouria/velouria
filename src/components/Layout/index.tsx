import { ReactNode } from 'react';

import { Header} from './Header';

import { Footer } from './Footer';

import { ThemeProvider } from './Theme';

import './index.css';

interface Properties {
  children: ReactNode;
}

export const RootLayout = ({ children }: Properties) => {
  return (
    <div className='root__container'>
      <Header />
      <main className='main__container'>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </main>
      <Footer />
    </div>
  );
};
