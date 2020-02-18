import React, { useContext } from 'react';
import Open from './gameParts/Open';
import Flag from './gameParts/Flag';
import Maybe from './gameParts/Maybe';
import Exploded from './gameParts/Exploded';
import Closed from './gameParts/Closed';
import { Context } from '../context/Provider'

export default function Cell({position, cell: {cellState,hasMine}}){
    
    const { openIt, flagIt, maybeIt, clearIt, 
        gameStatus:[gameStatus,setGameStatus]
    } = useContext(Context)

    const changeTo = gameStatus === 'on' && {
        open:{ onClick: (()=>openIt(position,setGameStatus))},
        flag:{ onRightClick: (()=>flagIt(position))},
        maybe:{ onRightClick: (()=>maybeIt(position))},
        clear:{ onRightClick: (()=>clearIt(position))}
    }

    const parts = {
        open: <Open {...changeTo.open} {...{cellState}}/>,
        flag: <Flag {...changeTo.maybe}/>,
        maybe: <Maybe {...changeTo.clear}/>,
        exploded: <Exploded />,
        closed: <Closed 
                {...changeTo.open}
                {...changeTo.flag}
                {...{gameStatus}}
                {...{hasMine}}
            />
    }

    return typeof cellState==='number' 
        ? parts.open
        : parts[cellState]
}