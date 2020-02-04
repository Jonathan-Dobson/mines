import getAdjacentCellPositions from './getAdjacentCellPositions'
import isWithinLimit from './isWithinLimit'
import countAdjacentFlags from './countAdjacentFlags'
import countAdjacentMines from './countAdjacentMines'

export default ({r,c,minefield,openIt,setGame}) => {
    let adjacentCellPositions = getAdjacentCellPositions(r,c)

    if ( countAdjacentMines( minefield , adjacentCellPositions )
         <= countAdjacentFlags( minefield, adjacentCellPositions ) 
    ) {
        adjacentCellPositions.forEach(([r, c]) => {
            if (isWithinLimit(r,c,minefield)) {
                if (minefield[r][c].cellState==='closed') {
                    openIt({rownum:r, colnum: c},setGame)
                }
            }
        })
    }

};
