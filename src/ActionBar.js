import React from 'react'

const ActionBar = ({startGame}) => {
    

    
    
    return (
        <div style={{margin: 6}}>
            <div style={{display:'flex',justifyContent:'space-evenly',color:'#eee'}}>
                <div>Time: 00:00</div>
                <div>Mines: 0/10</div>
            </div>
            <button onClick={()=>startGame({size:5,mines:10})}>Start Game</button>
            <button>Change Difficulty</button>
            <button>Pause</button>
        </div>
    )
}

export default ActionBar
