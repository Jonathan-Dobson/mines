import React, {useState} from 'react';
import openIt from '../functions/openIt'
import flagIt from '../functions/flagIt'
import maybeIt from '../functions/maybeIt'
import clearIt from '../functions/clearIt'

export const MinefieldContext = React.createContext()

export default function MinefieldProvider(props) {
    const minefieldHook = useState([])
    const [minefield, setMinefield] = minefieldHook

    return (
        <MinefieldContext.Provider
            value={{
                minefield, 
                setMinefield, 
                openIt: openIt(setMinefield),
                flagIt: flagIt(setMinefield),
                maybeIt: maybeIt(setMinefield),
                clearIt: clearIt(setMinefield)
            }}>
            {props.children}
        </MinefieldContext.Provider>
    )
}