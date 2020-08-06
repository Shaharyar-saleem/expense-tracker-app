import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

const Transactions = (props) => {
    const sign = props.transaction.Amount < 0 ? '-' : '+';

    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <div>
          <li className={props.transaction.Amount < 0 ? 'minus' : 'plus'}>
              {props.transaction.Text} <span>{sign}${Math.abs(props.transaction.Amount)}</span><button onClick={() => deleteTransaction(props.transaction.id) } className="delete-btn">x</button>
          </li>
        </div>
    )
}

export default Transactions;
