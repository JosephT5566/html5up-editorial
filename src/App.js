import React from 'react';

import Main from './components/Main';
import Sidebar from './components/Sidebar';

import './assets/css/main.css';

function App() {
    return (
        <div id="wrapper">
            <Main />
            <Sidebar />
        </div>
    );
}

export default App;
