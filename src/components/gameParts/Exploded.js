import React from 'react'
import Div from '../Div'

export default function Exploded () {
    return (
        <Div Cell-Open Mine-Container>
            <Div Mine-Circle Exploded>
                <Div Mine-Spike Exploded></Div>
                <Div Mine-Spike rotate-60 Exploded></Div>
                <Div Mine-Spike rotate-120 Exploded></Div>
            </Div>
        </Div>
    )
}

