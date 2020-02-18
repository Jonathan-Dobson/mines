import autoOpenAll from '../autoOpenAll'

export default function openIt(setMinefield) {
    return function( {rownum:r, colnum:c}, setGame ){
        setMinefield(prev=>{
            let minefield = [...prev]
            let {cellState,hasMine} = minefield[r][c]
            if(cellState !== 'flag'){
                hasMine && setGame('lost')
                cellState = hasMine 
                    ? 'exploded' 
                    : autoOpenAll({r,c,minefield,openIt:openIt(setMinefield),setGame})
            }
            minefield[r][c] = { hasMine, cellState }
            return minefield
        })
    }
}