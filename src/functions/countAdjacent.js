import isWithinLimit from './isWithinLimit'
import getAdjacentCellPositions from './getAdjacentCellPositions'

export default (minefield, r, c) =>  
    getAdjacentCellPositions(r,c).reduce((acc, [r, c]) => {
        if (isWithinLimit(r,c,minefield)) {
            return {
                flags: acc.flags + (minefield[r][c].cellState === "flag" ? 1 : 0),
                mines: acc.mines + (minefield[r][c].hasMine ? 1 : 0)
            }
        }
        return acc
    }, { flags:0, mines:0 })

