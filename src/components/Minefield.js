import React, { useContext } from 'react'
import Cell from './Cell'
import { Context } from '../context/Provider'

export default function Minefield () {
    const { minefield } = useContext(Context)
    return (
        <div style={{
            display: 'grid',
            gridGap: 2,
            gridTemplateColumns: `repeat(${minefield.length}, 50px)`,
            gridTemplateRows: `repeat(${minefield.length}, 50px)`
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

