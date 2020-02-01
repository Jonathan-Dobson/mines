import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SettingsProvider from './context/SettingsProvider'
import GameStatusProvider from './context/GameStatusProvider'
import MinefieldProvider from './context/MinefieldProvider'

ReactDOM.render(
    <SettingsProvider>
        <GameStatusProvider>
            <MinefieldProvider>
                <App />
            </MinefieldProvider>
        </GameStatusProvider>
    </SettingsProvider>
, document.getElementById('root'));
