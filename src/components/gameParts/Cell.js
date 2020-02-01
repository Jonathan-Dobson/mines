import React from 'react';
import Closed from './Closed';
import Open from './Open';
import Flag from './Flag';
import Maybe from './Maybe';
import Exploded from './Exploded';

export default function Cell({
        gameStatus,
        cell: {status,hasMine}
    }){

    if(typeof status==='number'){
        return <Open status={status}/>
    }
    
    switch(status){
        case "flag": return(<Flag />)
        case "maybe": return(<Maybe />)
        case "exploded": return(<Exploded />)
        default: {
            switch(gameStatus){
                case "lost": return(<Closed {...{hasMine}} />)
                default: return(<Closed />)
            }
        }
    }
}