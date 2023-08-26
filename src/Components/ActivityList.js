import React from 'react';
import'../Style/ActivityList.css';
function ActivityList({ activities }) {
  return (
    <div>
      <h2>Activity List</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityList;
