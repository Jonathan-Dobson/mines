import React from 'react'

const Mine = ({exploded}) => {
    const color = {
        backgroundColor: exploded ? 'red' : 'black'
    }
    return (
        <div className="Mine-Container">
            <div className="Mine-Circle" style={color}>
                <div className="Mine-Spike" style={color}></div>
                <div className="Mine-Spike rotate-60" style={color}></div>
                <div className="Mine-Spike rotate-120" style={color}></div>
            </div>
        </div>
    )
}

export default Mine
