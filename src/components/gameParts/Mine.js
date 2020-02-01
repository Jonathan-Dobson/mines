import React from 'react'
import Div from '../Div'

export default function Mine () {
    return (
        <Div Cell Mine-Container>
            <Div Mine-Circle>
                <Div Mine-Spike/>
                <Div Mine-Spike rotate-60/>
                <Div Mine-Spike rotate-120/>
            </Div>
        </Div>
    )
}
