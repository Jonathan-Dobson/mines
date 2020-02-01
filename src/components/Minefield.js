import React, { useContext, useEffect } from 'react'
import Cell from './gameParts/Cell'
import { GameContext } from '../GameProvider'
import generateMinefield from '../functions/generateMinefield'

export default function Minefield ({size,mines}) {
    const {
        minefield:[minefield,setMinefield],
        gameStatus:[gameStatus]
    } = useContext(GameContext)

    useEffect(()=>{
        setMinefield(generateMinefield({size,mines}))
    },[])

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

