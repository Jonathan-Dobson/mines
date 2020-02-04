export default function flagIt(setMinefield) {
    return function(position){
        setMinefield(prev=>{
            let next = [...prev]
            next[position.rownum][position.colnum].cellState = 'maybe';
            return next
        })
    }
}