import React, { Suspense } from 'react';
import { Router, View } from 'react-navi';

import Sidebar from './components/Sidebar';

import routes from './routes';

import './assets/css/main.css';

function App() {
    return (
        <div id="wrapper">
            <Router routes={routes}>
                <Suspense fallback={null}>
                    <View />
                </Suspense>
            </Router>
            <Sidebar />
        </div>
    );
}

export default App;
