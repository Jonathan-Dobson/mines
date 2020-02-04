import React, {useState} from 'react';
import cellCommands from '../functions/cellCommands/bundled'

export const Context = React.createContext()

export default function SettingsProvider(props) {
    let [minefield,setMinefield] = useState([])
    const value = { 
        gameStatus: useState('off'),
        settings: {
            size: useState(5), 
            mines: useState(3)
        },
        minefield,
        setMinefield,
        ...cellCommands(setMinefield),
    }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}