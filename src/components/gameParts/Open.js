import React from 'react';
import Div from '../Div';

export default function Open({ handleClicks , cellState}){
    return (
        <Div Cell-Open {...handleClicks}>
            <Div Cell-Number>{cellState>0 && cellState}</Div>
        </Div>
    )
}