import React from 'react';
import'../Style/TransactionList.css';
function TransactionList({ transactions }) {
  return (
    <div>
      <h2>Transaction List</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description}: {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
