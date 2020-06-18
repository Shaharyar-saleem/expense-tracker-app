import React, {useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext); 
    const amounts = transactions.map(transaction => transaction.Amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return (
        <div>
            <h4>Your Balance</h4>
             <h1 class={total < 0 ? 'negative-balance' : 'positive-balance'}>{total}</h1>
        </div>
    )
}

export default Balance;
