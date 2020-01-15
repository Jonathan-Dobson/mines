import React from 'react'

const ActionBar = ({startGame, gameOn, totalFlags}) => {
    const TotalMines = 6    
    const startText = gameOn ? "Start Over" : "Start Game"
    
    return (
        <div style={{margin: 6}}>
            <div style={{display:'flex',justifyContent:'space-evenly',color:'#eee'}}>
                {/* <div>Time: 00:00</div> */}
                <div>Mines: {totalFlags}/{TotalMines}</div>
            </div>
            <button onClick={()=>startGame({size:8,mines:TotalMines})}>{startText}</button>
            {/* <button>Change Difficulty</button> */}
            {/* <button>Pause</button> */}
        </div>
    )
}

export default ActionBar
