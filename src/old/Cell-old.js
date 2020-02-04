import React from 'react'
import Flag from '../components/gameParts/Flag'
import Mine from '../components/gameParts/Mine'

const Cell = ({open, flag, maybe, mine, exploded, position, flagIt, openIt, countFlags, countOpen}) => {
    const CellTypes = [ 
        'Cell' ,
        open!==false && 'Cell-Open',
        flag && 'Cell-Flag'
    ].join(' ')

    const updateBoard = (props) => {
        return new Promise((resolve,reject)=>{
            props.event.preventDefault()
            if(props.event.type==='contextmenu'){
                flagIt(props.position)
            }
            if(props.event.type==='click'){
                openIt(props.position)
            }
            
            resolve()
        })    
    }

    const handleClick = (props) => {
        updateBoard(props).then(()=>{
            countFlags()
            countOpen()
    
        })

    }

    return (
        <span className={CellTypes} 
            onClick={(event)=>handleClick({event,position})} 
            onContextMenu={(event)=>handleClick({event,position})} >
                <b className="Cell-Number">{open>0 && open}</b>
                {flag && <Flag />}
                {maybe && <Flag maybe />}
                {mine && <Mine exploded={exploded?true:false}/>}
                {/* {position.r},{position.c} */}
        </span>
    )
}

export default Cell