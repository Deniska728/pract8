import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

import './styles/index.scss';

function App() {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
}

export default App;
