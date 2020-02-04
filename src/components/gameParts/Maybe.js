import React from 'react'
import Div from '../Div'

const Maybe = ({handleClicks}) => {
    return (
        <Div Cell {...handleClicks}>
            <div className="Flag-Container">
                <div className="Flag-Pole"></div>
                <div className="Flag-Area">
                    <div className="Flag-Triangle"></div>
                    <div className="Flag-Maybe"><b>?</b></div>
                </div>
            </div>
        </Div>
    )
}

export default Maybe
