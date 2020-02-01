import React, { useContext } from 'react';
import { SettingsContext } from '../context/SettingsProvider';
import { MinefieldContext } from '../context/MinefieldProvider';
import { GameStatusContext } from '../context/GameStatusProvider';
import generateMinefield from '../functions/generateMinefield'

export default function ControlPanel(){
    const {size, mines} = useContext(SettingsContext)
    const {setMinefield} = useContext(MinefieldContext)
    const {setGameStatus} = useContext(GameStatusContext)

    function handleStart(){
        setMinefield(generateMinefield({size,mines}))
        setGameStatus("lost")
    }

    return(
        <div style={{margin: 6}}>
            <div style={{display:'flex',justifyContent:'space-evenly',color:'#eee'}}>
                {/* <div>Time: 00:00</div> */}
                {/* <div>Mines: {totalFlags}/{TotalMines}</div> */}
            </div>
            {/* <button onClick={()=>startGame({size:8,mines:TotalMines})}>{startText}</button> */}
            <button onClick={handleStart}>Start</button>
            {/* <button>Change Difficulty</button> */}
            {/* <button>Pause</button> */}
        </div>
    )
}
