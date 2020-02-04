import React from 'react';
import Div from '../Div';
import Mine from './Mine';

export default function Closed({ gameStatus, handleClicks, hasMine }){    
    return ( 
        <Div Cell {...handleClicks}>
                {gameStatus==='lost' && hasMine && <Mine />}
        </Div>
    )
}