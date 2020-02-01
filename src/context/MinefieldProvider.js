import React, {useState} from 'react';

export const MinefieldContext = React.createContext()

export default function MinefieldProvider(props) {
    const [minefield,setMinefield] = useState([])

    return (
        <MinefieldContext.Provider
            value={{
                minefield,setMinefield,
            }}>
            {props.children}
        </MinefieldContext.Provider>
    )
}