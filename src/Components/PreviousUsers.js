import React from 'react';
import './PreviousUsers.css';

const previousUsers = [
  { name: 'John Doe', email: 'john.doe@example.com' },
  { name: 'Jane Smith', email: 'jane.smith@example.com' },
  { name: 'Michael Johnson', email: 'michael.johnson@example.com' },
  { name: 'Emily Davis', email: 'emily.davis@example.com' },
  { name: 'David Brown', email: 'david.brown@example.com' },
  { name: 'Linda Wilson', email: 'linda.wilson@example.com' },
  { name: 'James Garcia', email: 'james.garcia@example.com' },
  { name: 'Patricia Martinez', email: 'patricia.martinez@example.com' },
  { name: 'Robert Rodriguez', email: 'robert.rodriguez@example.com' },
  { name: 'Mary Hernandez', email: 'mary.hernandez@example.com' },
];

const PreviousUsers = () => {
  return (
    <div className="users-container">
      <h2>Previous Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {previousUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><a href="/login">Back to Login</a></p>
    </div>
  );
};

export default PreviousUsers;
