import React from 'react';
import Div from '../Div';
import Mine from './Mine';

export default function Closed({ gameStatus, onClick, onRightClick, hasMine }){  
    return ( 
        <Div Cell { ...{ onClick, onRightClick } }>
                { gameStatus==='lost' && hasMine && <Mine />}
        </Div>
    )
}