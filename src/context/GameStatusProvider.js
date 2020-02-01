import React, {useState} from 'react';

export const GameStatusContext = React.createContext()

export default function GameStatusProvider(props) {
    const [gameStatus,setGameStatus] = useState("off")

    return (
        <GameStatusContext.Provider
            value={{
                gameStatus,setGameStatus,
            }}>
            {props.children}
        </GameStatusContext.Provider>
    )
}