import React, {useState} from 'react';
import './App.css';
import Cell from './Cell'
import Container from './Container'
import ActionBar from './ActionBar'
import generateMinefield from './functions/generateMinefield'

function App() {
  const [state, setState] = useState({
    gameOn: false,
    gameOver: false,
    minefield: []
  })

  const startGame = (settings) => {
    const Minefield = generateMinefield(settings)
    setState({
      ...state, 
      gameOn: true,
      gameOver: false, 
      minefield: Minefield
    })
  }

  const flagIt = (position) => {
    if(!state.gameOver && state.gameOn ){
    const oldField = [...state.minefield]
    const oldCell = oldField[position.r][position.c]
    let newCell

    if(oldCell.flag===false && oldCell.maybe===false){
      newCell = {
        ...oldCell,
        maybe: false, 
        flag: true
      }
    }
    else if(oldCell.maybe){
      newCell = {
        ...oldCell,
        maybe: false, 
        flag: false
      }
    }
    else if(oldCell.flag){
      newCell = {
        ...oldCell,
        maybe: true, 
        flag: false
      }
    }

    oldField[position.r][position.c] = newCell
    setState({
      ...state,
      minefield: oldField
    })
  }
  }
  
  const openIt = (position) => {
    let gameOver = state.gameOver
    if(!gameOver && state.gameOn ){


    const oldField = [...state.minefield]
    const oldCell = oldField[position.r][position.c]
    let newCell = oldCell

    console.log(oldCell);

    if(oldCell.flag){
      console.log('cannot open. has flag');
    }

    else if(oldCell.hasMine){
      console.log('opened a cell that has a mine. game over');
      newCell = {
        ...oldCell,
        open: true,
        hasMine: true
      }
      gameOver = true
    }

    else if(oldCell.open){
      console.log('this cell is already open');
    }

    else {
      console.log('opening cell');
      newCell = {
        ...oldCell,
        open: true
      }
    }

    oldField[position.r][position.c] = newCell
    setState({
      ...state,
      gameOver: gameOver,
      gameOn: !gameOver,
      minefield: oldField
    })
  }

  }
  
  

  return (
    <div className="App">
      <h1 style={{position:'absolute',top:30, color: '#e00'}}>{state.gameOver ? "Game Over" : ""}</h1>
      <ActionBar startGame={startGame} gameOn={state.gameOn || state.gameOver}/>
      <Container size={state.minefield.length}>
        {state.minefield.map(
          (v,vi)=>v.map(
            (c,ci)=>
              <Cell key = {`${vi.toString()} ${ci.toString()}`} 
                position = {{r:vi,c:ci}}
                flagIt = {flagIt}
                openIt = {openIt}
                flag = {state.minefield[vi][ci].flag}
                maybe = {state.minefield[vi][ci].maybe}
                open = {state.minefield[vi][ci].open}
                mine = {(
                  state.minefield[vi][ci].hasMine && state.minefield[vi][ci].open)
                  || (state.gameOver && state.minefield[vi][ci].hasMine) }
                exploded = {state.minefield[vi][ci].hasMine && state.minefield[vi][ci].open }
              />))}

        {/* <Cell />
        <Cell />
        <Cell open />
        <Cell flag />
        <Cell flag maybe/>
        <Cell mine/>
        <Cell mine exploded/>
        <Cell open="1"/>
        <Cell /> */}
      </Container>
      <div style={{color: '#eee'}}>Click to Reveal Tile. Right-Click to set a Flag.</div>
    </div>
  );
}

export default App;
