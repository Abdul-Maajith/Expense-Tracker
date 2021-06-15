import React from 'react';

 const AppReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
        case "DELETE-BTN":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case "ADD-TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
    }
}
export default AppReducer;