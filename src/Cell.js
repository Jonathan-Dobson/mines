import React from 'react'
import Flag from './Flag'
import Mine from './Mine'

const Cell = ({open, flag, maybe, mine, exploded, position, flagIt, openIt}) => {
    const CellTypes = [ 
        'Cell' ,
        open && 'Cell-Open',
        flag && 'Cell-Flag'
    ].join(' ')

    const handleClick = (props) => {

        props.event.preventDefault()
        if(props.event.type==='contextmenu'){
            flagIt(props.position)
        }
        if(props.event.type==='click'){
            openIt(props.position)
        }

    }
    

    return (
        <span className={CellTypes} 
            onClick={(event)=>handleClick({event,position})} 
            onContextMenu={(event)=>handleClick({event,position})} >
                <b className="Cell-Number">{open && open}</b>
                {flag && <Flag />}
                {maybe && <Flag maybe />}
                {mine && <Mine exploded={exploded?true:false}/>}
                {/* {position.r},{position.c} */}
        </span>
    )
}

export default Cell