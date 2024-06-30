// UserStats.js
import React from 'react';
import './UserStats.css';

const UserStats = () => {
  return (
    <div className="user-stats">
      <h2>Your Performance</h2>
      <p>Shots Made: 100</p>
      <p>Shots Missed: 20</p>
      <p>Average Launch Angle: 45°</p>
      <p>Response Time: 0.5s</p>
      {/* Add more statistics as needed */}
    </div>
  );
}

export default UserStats;
