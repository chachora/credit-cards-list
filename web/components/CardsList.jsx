import React from 'react';

const CardsList = () => {
  return (
    <div>
      <h4>Existing Cards</h4>
      <table border={1} cellPadding={8}>
        <thead>
          <tr bgcolor="#d3d3d3">
            <th>Name</th>
            <th>Card Number</th>
            <th>Balance</th>
            <th>Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>1111 2222 3333 4444</td>
            <td>£10.24</td>
            <td>£5000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardsList;
