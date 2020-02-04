import getAdjacentCellPositions from './getAdjacentCellPositions'
import countAdjacentMines from './countAdjacentMines'
import autoOpenAdjacent from './autoOpenAdjacent'

export default function openIt(setMinefield) {
    return function({rownum:r,colnum:c},setGame){
        setMinefield(prev=>{
            let minefield = [...prev]
            let {cellState,hasMine} = minefield[r][c]

            if(cellState !== 'flag'){
                if(hasMine){
                    cellState = "exploded"
                    setGame('lost')
                }
                else {
                    autoOpenAdjacent({r,c,minefield,openIt:openIt(setMinefield),setGame})
                    cellState = countAdjacentMines( minefield , getAdjacentCellPositions(r,c) )
                }
            }
            minefield[r][c] = { hasMine, cellState }
            return minefield
        })
    }
}