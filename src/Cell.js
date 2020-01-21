import React from 'react'
import Flag from './Flag'
import Mine from './Mine'

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
        // console.log("1",new Date().getMilliseconds())
        updateBoard(props).then(()=>{
            // console.log("2",new Date().getMilliseconds());
            countFlags()
            countOpen()
    
        })
        // console.log("3",new Date().getMilliseconds())


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