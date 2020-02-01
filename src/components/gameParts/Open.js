import React from 'react';
import Div from '../Div';

export default function Open(props){
    console.log("props",props);
    return (

        <Div Cell-Open>
            <Div Cell-Number>{props.status>0&&props.status}</Div>
        </Div>
    )
}