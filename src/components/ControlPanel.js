import React, { useContext, useState, useEffect } from 'react';
import Div from './Div'
import { Context } from '../context/Provider'
import generateMinefield from '../functions/generateMinefield'

export default function ControlPanel(){
    const { 
        gameStatus: [gameStatus, setGameStatus],
        settings: { size:[size], mines:[mines] }, 
        setMinefield,
    } = useContext(Context)

    const [gameOverAlert, setGameOverAlert] = useState()

    function handleStart(){
        setGameOverAlert(false)
        setMinefield(generateMinefield({size,mines}))
        setGameStatus("on")
    }

    useEffect(() => {
        if(gameStatus==='lost'){
            setGameOverAlert(true)
        }
    },[gameStatus]
    )

    return(
        <div style={{margin: 6}}>
                    <Div >
                        {gameOverAlert && 
                            <>
                            <Div GameOverText>Ouch! You hit a mine!</Div>
                            <Div GameOverText>Game Over</Div>
                            </>
                        }
                    </Div>
            
            <div style={{display:'flex',justifyContent:'space-evenly',color:'#eee'}}>
                <div> Time: 00:00 </div> &nbsp;
                <div> Mines: {1}/{1} </div> &nbsp;
                <button onClick={handleStart}>
                    {gameStatus==='off'?'Start':gameStatus==='on'?'Start Over':'Play Again'}
                </button>
            </div>
            {/* <button onClick={()=>startGame({size:8,mines:TotalMines})}>{startText}</button> */}
            {/* <button>Change Difficulty</button> */}
            {/* <button>Pause</button> */}
        </div>
    )
}
