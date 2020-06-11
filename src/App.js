import React from 'react'
import Div from './components/Div'
import ControlPanel from './components/ControlPanel'
import Minefield from './components/Minefield'
import Footer from './components/Footer'
import FromJon from './components/FromJon'
import './App.css';

export default function App() {
    return (
        <Div App>
            <ControlPanel />
            <Minefield />
            {/* {gameOverAlert ? <Div GameOverText>Ouch! You hit a mine!<br/>Game Over</Div> : <Minefield />} */}
            <Footer />
            <FromJon />
        </Div>
    );
}
