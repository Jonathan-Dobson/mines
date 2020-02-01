import React, {useState} from 'react';
import generateMinefield from '../functions/generateMinefield'

export const GameContext = React.createContext()

export default function GameProvider(props) {
    const settings = useState({
        size: 4,
        mines: 4
    })
    const minefield = useState([])
    const gameStatus = useState("off")

    return (
        <GameContext.Provider
            value={{
                settings,
                minefield,
                gameStatus
            }}>
            {props.children}
        </GameContext.Provider>
    )
}