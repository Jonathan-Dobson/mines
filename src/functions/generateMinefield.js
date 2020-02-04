export default function generateMinefield({size, mines}){
    // size = (size squared) number of cells to create
    // mines = number of mines to plant

    // Create Minefield
    let rows = []
    for( let r=0 ; r < size ; r++ ){
        rows.push([])
        for( let c=0 ; c < size ; c++){
            rows[r].push([])
            rows[r][c] = {
                cellState: "closed",
                hasMine: false,
            }
        }
    }

    // Populate Minefield with mines
    for( let i=0 ; i < mines ; i++){
        let randomRow = Math.floor(Math.random()*size)
        let randomCol = Math.floor(Math.random()*size)
        // invalidate duplicates
        if(rows[randomRow][randomCol].hasMine){i--} 
        // insert a mine
        rows[randomRow][randomCol] = {
            ...rows[randomRow][randomCol], 
            hasMine: true
        };
    }
    return rows
}