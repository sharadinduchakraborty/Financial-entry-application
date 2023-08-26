import React, { useState } from 'react';
import '../Style/TaskForm.css';
function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [overview, setOverview] = useState('');
  const [entryName, setEntryName] = useState('');
  const [entryAmount, setEntryAmount] = useState('');
  const [entryDate, setEntryDate] = useState('');
  const [accountSubCategory, setAccountSubCategory] = useState('');
  const [accountCategory, setAccountCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && entryName && entryAmount && entryDate && accountSubCategory && accountCategory) {
      const task = {
        taskName,
        overview,
        entryName,
        entryAmount: parseFloat(entryAmount),
        entryDate,
        accountSubCategory,
        accountCategory
      };
      addTask(task);
      // Reset all fields
      setTaskName('');
      setOverview('');
      setEntryName('');
      setEntryAmount('');
      setEntryDate('');
      setAccountSubCategory('');
      setAccountCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Overview"
        value={overview}
        onChange={(e) => setOverview(e.target.value)}
      />
      <input
        type="text"
        placeholder="Entry Name"
        value={entryName}
        onChange={(e) => setEntryName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Entry Amount"
        value={entryAmount}
        onChange={(e) => setEntryAmount(e.target.value)}
      />
      <input
        type="date"
        placeholder="Entry Date"
        value={entryDate}
        onChange={(e) => setEntryDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Account Sub Category"
        value={accountSubCategory}
        onChange={(e) => setAccountSubCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Account Category"
        value={accountCategory}
        onChange={(e) => setAccountCategory(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
