import getAdjacentCellPositions from './getAdjacentCellPositions'
import isWithinLimit from './isWithinLimit'
import countAdjacent from './countAdjacent'

export default ({r,c,minefield,openIt,setGame}) => {
    let { mines, flags } = countAdjacent( minefield, r, c)
    if ( mines <= flags ) {
        getAdjacentCellPositions(r,c)
        .forEach(([r, c]) => {
            if (isWithinLimit(r,c,minefield)) {
                if (minefield[r][c].cellState==='closed') {
                    openIt({rownum:r, colnum: c},setGame)
                }
            }
        })
    }
    return mines
};
