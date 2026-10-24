import { HashRouter, Route, Routes } from 'react-router-dom';

import About from './pages/About';

import Compliance from './pages/Compliance';

import Contact from './pages/Contact';

import Crew from './pages/Crew';

import Home from './pages/Home';

import NotFound from './pages/NotFound';

import SWOT from './pages/SWOT';

import Partners from './pages/Partners';

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<About />} path='/sobre' />
                <Route element={<Contact />} path='/fale-conosco' />
                <Route element={<Compliance />} path='/curricularizacao' />
                <Route element={<Crew />} path='/equipe' />
                <Route element={<Home />} path='/' />
                <Route element={<SWOT />} path='/swot' />
                <Route element={<Partners />} path='/parceiros' />
                <Route element={<NotFound />} path='*' />
            </Routes>
        </HashRouter>
    );
}
