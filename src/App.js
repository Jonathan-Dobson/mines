import React from 'react'
import Div from './components/Div'
import ControlPanel from './components/ControlPanel'
import Minefield from './components/Minefield'
import Footer from './components/Footer'
import './App.css';

export default function App() {
    return (
        <Div App>
            <ControlPanel />
            <Minefield />
            <Footer />
        </Div>
    );
}
