import React, { useState } from 'react';
import '../Style/TransactionForm.css'
import generatedToken from '../Utility/utility';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && token) {
      addTransaction({ description, amount: parseFloat(amount), token });
      setDescription('');
      setAmount('');
      setToken('');
    }
  };

  const handleGenerateToken = () => {
    const generatedToken = generatedToken();
    setToken(generatedToken);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button type="button" onClick={handleGenerateToken}>
        Generate Token
      </button>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
