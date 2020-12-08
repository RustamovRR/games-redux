import React, { createContext, useReducer } from 'react'

export const GlobalContext = createContext()

export default function Provider({ reducer, initialValue, children }) {
    return (
        <GlobalContext.Provider value={useReducer(reducer, initialValue)}>
            {children}
        </GlobalContext.Provider>
    )
}
