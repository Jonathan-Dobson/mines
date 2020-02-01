import React, {useState} from 'react';
import generateMinefield from './functions/generateMinefield'

export const GameContext = React.createContext()

export default function GameProvider(props) {
    const minefield = useState([])
    const gameStatus = useState("lost")
    return (
        <GameContext.Provider
            value={{
                minefield,
                gameStatus
            }}>
            {props.children}
        </GameContext.Provider>
    )
}