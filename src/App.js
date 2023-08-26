import React, { useState } from 'react';
import TransactionForm from './Components/TransactionForm';
import TransactionList from './Components/TransactionList'; 
import TaskForm from './Components/TaskForm';
import ActivityList from './Components/ActivityList';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activities, setActivities] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  };

  return (
    <div className="App">
      <h1>Financial Entry Application</h1>

      {/* Transaction Form and List */}
      <div className="section">
        <h2>Transaction Entry</h2>
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>

      {/* Task Form and List */}
      <div className="section">
        <h2>Task Entry</h2>
        <TaskForm addTask={addTask} />
        <ActivityList activities={tasks.map(task => task.taskName)} />
      </div>

      {/* Other Sections */}
      {/* You can add more forms and lists here for other functionalities */}

    </div>
  );
}

export default App;
