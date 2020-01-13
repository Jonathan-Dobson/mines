import React from 'react'

const Flag = ({maybe}) => {
    return (
        <div className="Flag-Container">
            <div className="Flag-Pole"></div>
            <div className="Flag-Area">
                <div className="Flag-Triangle"></div>
                <div className="Flag-Maybe"><b>{maybe && "?"}</b></div>
            </div>
        </div>
    )
}

export default Flag
