import React from 'react';
import { useGlobalContext } from "../context/GlobalContext";

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? "-" : "+";
    const { deleteTransaction } = useGlobalContext();

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign}₹{Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
             X
            </button>
        </li>
    )
}
