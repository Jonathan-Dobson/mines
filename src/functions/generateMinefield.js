
export default function generateMinefield({size, mines}){

    // Create Minefield

    let rows = []
    for( let r=0 ; r < size ; r++ ){
        rows.push([])
        for( let c=0 ; c < size ; c++){
            rows[r].push([])
                rows[r][c] = {
                    flag: false,
                    maybe: false, 
                    hasMine: false,
                    open: false
                }
        }
    }

    // Populate Minefield with mines
    for( let i=0 ; i < mines ; i++){
        let randomRow = Math.floor(Math.random()*size)
        let randomCol = Math.floor(Math.random()*size)
        if(rows[randomRow][randomCol].hasMine){i--} // invalidate duplicates
        rows[randomRow][randomCol] = {...rows[randomRow][randomCol], hasMine: true};
    }
    return rows
}