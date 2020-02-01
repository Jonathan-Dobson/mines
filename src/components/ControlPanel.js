import React from 'react';

export default function ControlPanel(){
    return(
        <div style={{margin: 6}}>
            <div style={{display:'flex',justifyContent:'space-evenly',color:'#eee'}}>
                {/* <div>Time: 00:00</div> */}
                {/* <div>Mines: {totalFlags}/{TotalMines}</div> */}
            </div>
            {/* <button onClick={()=>startGame({size:8,mines:TotalMines})}>{startText}</button> */}
            <button onClick={null}>Start</button>
            {/* <button>Change Difficulty</button> */}
            {/* <button>Pause</button> */}
        </div>
    )
}
