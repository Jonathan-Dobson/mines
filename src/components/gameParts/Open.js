import React from 'react';
import Div from '../Div';

export default function Open({ onClick, onRightClick , cellState}){
    return (
        <Div Cell-Open {...{onClick, onRightClick}}>
            <Div Cell-Number>{cellState>0 && cellState}</Div>
        </Div>
    )
}