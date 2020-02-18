export default function handleClicks(left,right) {
    return {
        onClick: (e)=>{
            left(e)
        },
        onRightClick: (e)=>{
            e.preventDefault()
            right(e)
        }
    }
}
