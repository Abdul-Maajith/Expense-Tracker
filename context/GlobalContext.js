import React, { createContext, useContext, useReducer } from 'react';
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: []
}

// Create context
 const GlobalContext = createContext(initialState);

//Provider COmponents
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions.
    const deleteTransaction = (id) => {
        dispatch({type: "DELETE-BTN", payload: id})
    }

    const addTransaction = (transaction) => {
        dispatch({type: "ADD-TRANSACTION", payload: transaction})
    }
    
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

// Here, Exporting GlobalContext is not necessary! As we have included that in useGlobalContext!

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}
