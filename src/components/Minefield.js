import React, { useContext } from 'react'
import Cell from './gameParts/Cell'
import { SettingsContext } from '../context/SettingsProvider'
import { GameStatusContext } from '../context/GameStatusProvider'
import { MinefieldContext } from '../context/MinefieldProvider'

export default function Minefield () {
    const {size} = useContext(SettingsContext)
    const {gameStatus} = useContext(GameStatusContext)
    const {minefield} = useContext(MinefieldContext)

    return (
        <div style={{
            display: 'grid',
            gridGap: 2,
            gridTemplateColumns: `repeat(${size}, 50px)`,
            gridTemplateRows: `repeat(${size}, 50px)`
        }}>
            {minefield
                .map((row,rownum)=>
                    row.map((cell,colnum)=>
                        <Cell {...{
                            gameStatus,
                            cell,
                            colnum,
                            rownum,
                            key: `${rownum.toString()} ${colnum.toString()}`
                        }}/>
                    )
                )
            }
        </div>
    )
}

