import React from 'react'
import Div from '../Div'

const Flag = ({maybe}) => {
    return (
        <Div Cell>
            <div className="Flag-Container">
                <div className="Flag-Pole"></div>
                <div className="Flag-Area">
                    <div className="Flag-Triangle"></div>
                    <div className="Flag-Maybe"><b>{maybe && "?"}</b></div>
                </div>
            </div>
        </Div>
    )
}

export default Flag
