import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';


export const AddTransaction = () => {
    const [Text, setText] = React.useState('');
    const [Amount, setAmount] = React.useState(0);
    const { addTransaction} = useContext(GlobalContext);
    
    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        Text,
        Amount: +Amount
     } 
     addTransaction(newTransaction);
    }

    return (    
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" required value={Text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" required value={Amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
        </>
    )
}

export default AddTransaction;