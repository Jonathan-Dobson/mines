export default function rightClick(setMinefield,newCellState) {
    return function(position){
        setMinefield(prev=>{
            let next = [...prev]
            next[position.rownum][position.colnum].cellState = newCellState;
            return next
        })
    }
}