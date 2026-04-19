import { FC, ReactElement } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Contact from './pages/Contact';
import Crew from './pages/Crew';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<About />} path='/sobre' />
        <Route element={<Contact />} path='/fale-conosco' />
        <Route element={<Crew />} path='/equipe' />
        <Route element={<Home />} path='/' />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
