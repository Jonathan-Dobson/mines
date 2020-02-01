import React from 'react'
import classes from '../functions/classesFromProps'

export default function (props) {
    return (
        <div 
            className = {classes(props)} 
            style = {props.style}
            onContextMenu = {(e)=>{e.preventDefault()}}
            >
            {props.children}
        </div>
    )
}

