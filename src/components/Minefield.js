import React, { useContext } from 'react'
import Cell from './Cell'
import { SettingsContext } from '../context/SettingsProvider'
import { MinefieldContext } from '../context/MinefieldProvider'

export default function Minefield () {
    const {size} = useContext(SettingsContext)
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
                            key: `${rownum.toString()} ${colnum.toString()}`,
                            position: {colnum, rownum},
                            cell,
                        }}/>
                    )
                )
            }
        </div>
    )
}

