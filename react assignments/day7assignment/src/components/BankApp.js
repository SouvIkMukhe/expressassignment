// src/components/BankApp.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from '../actions';
import './BankApp.css';

function BankApp() {
  const [amountValue, setAmount] = useState('');
  const [error, setError] = useState('');
  const currentBalance = useSelector((state) => state.balance);
  const dispatch = useDispatch();
  const minBalance = 500; // Set your minimum balance requirement here

  const deposit_click = () => {
    const amount = parseFloat(amountValue);
    if (!isNaN(amount) && amount > 0) {
      dispatch(deposit(amount));
      setAmount('');
      setError('');
      window.alert(`Money deposited successfully!`);
    } else {
      setError('Please enter a valid positive amount.');
    }
  };

  const withdraw_click = () => {
    const amount = parseFloat(amountValue);
    if (!isNaN(amount) && amount > 0 && amount <= currentBalance - minBalance) {
      dispatch(withdraw(amount));
      setAmount('');
      setError('');
      window.alert(`Money withdrawn successfully!`);
    } else {
      setError(`Invalid withdrawal amount or must maintain a minimum balance of $${minBalance}.`);
    }
  };

  return (
    <div className="bank-app">
      <h1>Your balance is ${currentBalance.toFixed(2)}</h1>
      <div className="atm">
        Enter Amount :
        <input
          type="text"
          placeholder="Enter Amount"
          value={amountValue}
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={withdraw_click}>Withdraw</button>
        <button onClick={deposit_click}>Deposit</button>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default BankApp;
