import React from 'react'
import classes from '../functions/classesFromProps'

export default function (props) {
    const {onClick, onContextMenu, children, style} = props
    return (
        <div 
            className = {classes(props)} 
            style = {style}
            onClick = {onClick}
            onContextMenu = {
                onContextMenu 
                    ? onContextMenu 
                    : (e)=>{e.preventDefault()}}>
                        {children}
        </div>
    )
}

