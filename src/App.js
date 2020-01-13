import React, {useState} from 'react';
import './App.css';
import Cell from './Cell'
import Container from './Container'
import ActionBar from './ActionBar'
import generateMinefield from './functions/generateMinefield'

function App() {
  const [state, setState] = useState({
    gameOn: false,
    minefield: []
  })

  const startGame = (settings) => {
    const Minefield = generateMinefield(settings)
    console.table(Minefield);
    setState({
      ...state, 
      gameOn: true, 
      minefield: Minefield
    })
  }

  const flagIt = (position) => {
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
    console.log(newCell);
    setState({
      ...state,
      minefield: oldField
    })


  }
  

  return (
    <div className="App">
      <ActionBar startGame={startGame}/>
      <Container size={state.minefield.length}>
        {state.minefield.map(
          (v,vi)=>v.map(
            (c,ci)=>
              <Cell key = {`${vi.toString()} ${ci.toString()}`} 
                position = {{r:vi,c:ci}}
                flagIt = {flagIt}
                flag = {state.minefield[vi][ci].flag}
                maybe = {state.minefield[vi][ci].maybe}
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
    </div>
  );
}

export default App;
