export default function handleClicks(left,right) {
    return {
        onClick: (event)=>{ // left click
            left()
        },
        onContextMenu: (event)=>{// right click
            right()
        }
    }
}