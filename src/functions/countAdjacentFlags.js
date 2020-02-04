import isWithinLimit from './isWithinLimit'

export default (minefield, adjacentCellPositions) =>  
    adjacentCellPositions.reduce((acc, [r, c]) => {
        if (isWithinLimit(r,c,minefield)) {
            return acc + (minefield[r][c].cellState === "flag"
                ? 1
                : 0)
        }
        return acc
    }, 0)
