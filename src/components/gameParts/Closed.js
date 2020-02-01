import React from 'react';
import Div from '../Div';
import Mine from './Mine'

export default function Closed({hasMine}){
    return (
        <Div Cell>
            {hasMine && <Mine />}
        </Div>
    )
}