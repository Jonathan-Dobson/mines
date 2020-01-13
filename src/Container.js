import React from 'react'

const Container = (props) => {
    return (
        <div className="Container" style={{
            display: 'grid',
            gridGap: 2,
            gridTemplateColumns: `repeat(${props.size}, 50px)`,
            gridTemplateRows: `repeat(${props.size}, 50px)`
        }}>
            {props.children}
        </div>
    )
}

export default Container
