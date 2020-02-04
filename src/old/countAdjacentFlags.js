import isWithinLimit from '../isWithinLimit'
import getAdjacentCellPositions from '../getAdjacentCellPositions'

export default (minefield, r, c) =>  
    getAdjacentCellPositions(r,c).reduce((acc, [r, c]) => {
        if (isWithinLimit(r,c,minefield)) {
            return acc + (minefield[r][c].cellState === "flag"
                ? 1
                : 0)
        }
        return acc
    }, 0)
