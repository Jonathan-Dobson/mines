import getAdjacentCellPositions from './getAdjacentCellPositions'
import isWithinLimit from './isWithinLimit'
import countAdjacent from './countAdjacent'

export default ({r,c,minefield,openIt,setGame}) => {
    let { mines, flags } = countAdjacent( minefield, r, c)
    mines <= flags &&
        getAdjacentCellPositions(r,c)
        .forEach(([r, c]) => 
            isWithinLimit(r,c,minefield) && 
            minefield[r][c].cellState === 'closed' && 
            openIt({rownum:r, colnum: c},setGame)
        )
    return mines
};
