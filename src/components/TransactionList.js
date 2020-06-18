import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transactions from './Transactions';


export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  
    return (
                <>
                  <h3>History</h3>
                   <ul className="list">
                     <li><span>Date</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time</span><span>&nbsp;&nbsp;&nbsp;Dis</span><span>Amount</span></li>
                     {transactions.map(transaction => (<Transactions key={transaction.id} transaction={transaction} />))}

                    </ul>
                </>
         )
}

export default TransactionList;
