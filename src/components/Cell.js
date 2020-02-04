import React, { useContext } from 'react';
import Closed from './gameParts/Closed';
import Open from './gameParts/Open';
import Flag from './gameParts/Flag';
import Maybe from './gameParts/Maybe';
import Exploded from './gameParts/Exploded';
import { Context } from '../context/Provider'
import handleClicks from '../functions/handleClicks';

export default function Cell({position, cell: {cellState,hasMine}}){
    const { openIt, flagIt, maybeIt, clearIt, 
        gameStatus:[gameStatus,setGameStatus]
    } = useContext(Context)
    
    if(typeof cellState==='number'){
        return <Open 
            cellState={cellState}
            handleClicks = { 
                    gameStatus === 'on' && handleClicks(
                        ()=>{openIt(position,setGameStatus)},
                        ()=>{}
                    ) 
                }
            />
    }
    
    switch(cellState){
        case "flag": 
            return(<Flag 
                handleClicks = { 
                    gameStatus === 'on' && handleClicks(
                        ()=>{},
                        ()=>{maybeIt(position)}
                    ) 
                }/>)
        case "maybe": 

            return(<Maybe 
                handleClicks = { 
                    gameStatus === 'on' && handleClicks(
                        ()=>{},
                        ()=>{clearIt(position)}
                    ) 
                }/>)
        case "exploded": return(<Exploded />)
        default: {

            return(<Closed 
                {...{gameStatus}}
                {...{hasMine}}
                handleClicks = { 
                    gameStatus === 'on' && handleClicks(
                        ()=>{openIt(position,setGameStatus)},
                        ()=>{flagIt(position)}
                    ) 
                }
            />) 
        }
    }
}