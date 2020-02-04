export default function clearIt(setMinefield) {
    return function(position){
        setMinefield(prev=>{
            let next = [...prev]
            next[position.rownum][position.colnum].cellState = 'closed';
            return next
        })
    }
}