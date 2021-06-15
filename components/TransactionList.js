import React, { useContext } from 'react'
import { useGlobalContext } from "../context/GlobalContext";
import { Transaction } from "./Transaction"

export const TransactionList = () => {
    const { transactions } = useGlobalContext();

    return (
        <>
          <h3>History</h3>
         <ul className="list">
            {transactions.map(transaction => (
               <Transaction key={transaction.id} transaction={transaction} />
            ))
            }
      </ul>
        </>
    )
}
