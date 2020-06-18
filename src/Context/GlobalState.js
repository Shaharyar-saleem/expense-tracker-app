import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions:
    [
        // {id: 1, text:'first', Amount: -55},
        // {id: 2, text:'second', Amount: 0},
        // {id: 3, text:'third', Amount: 0},
        // {id: 4, text:'forth', Amount: 4000}
    
    ]
}

// Create Context

export const GlobalContext = createContext(initialState);


// Provider component

export const GlobalProvider = ({ children })=>{
  const [state, dispatch] = useReducer(AppReducer, initialState)
   
//   Actions
function deleteTransaction(id){
    dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
})
}

function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
}

  return(
      <GlobalContext.Provider value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction
      }}>
          {children}
      </GlobalContext.Provider>
      )
}

