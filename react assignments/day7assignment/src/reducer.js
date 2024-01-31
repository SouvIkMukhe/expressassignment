// src/reducer.js

const initialState = {
    balance: 0,
  };
  
  const minBalance = 500;
  
  const bankReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DEPOSIT':
        return { ...state, balance: state.balance + parseFloat(action.amount) };
      case 'WITHDRAW':
        if (state.balance - parseFloat(action.amount) < minBalance) {
          console.log('Withdrawal amount exceeds allowed limit. Minimum balance should be $500.');
          return state;
        } else {
          return { ...state, balance: state.balance - parseFloat(action.amount) };
        }
      default:
        return state;
    }
  };
  
  export default bankReducer;
  