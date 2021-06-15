import React, { useState } from 'react';
import { useGlobalContext } from "../context/GlobalContext";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useGlobalContext();

    const handleSubmit = (e) => {
      e.preventDefault();

      const newTransaction = {
        id : new Date().getHours().toString(),
        text: text,
        amount: +amount, //Add + to convert string to num
      }

      addTransaction(newTransaction);
    }

    return (
        <>
        <h3>Add New Transaction</h3>
        <form onSubmit={handleSubmit}>

            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" 
                placeholder="Enter text..."
                value={text} 
                onChange={(e) => {
                  setText(e.target.value);
                }}/>
            </div>

            <div className="form-control">
                <label htmlFor="amount">
                    Amount <br />
                    (Negative - Expense, Positive - Income)
                </label>
                <input type="number" 
                placeholder="Enter amount..."
                value={amount} 
                onChange={(e) => {
                  setAmount(e.target.value);
                }} 
                />
                
            </div>

            <button className="btn" type="submit">
                Add Transaction
            </button>
        </form>

        </>
    )
}
