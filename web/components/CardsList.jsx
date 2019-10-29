import React from 'react';
import styles from './CardsList.css';

const CardsList = () => {
  return (
    <div>
      <h4>Existing Cards</h4>
      <table className={styles.table}>
        <thead>
          <tr bgcolor="#d3d3d3">
            <th className={styles.cell}>Name</th>
            <th className={styles.cell}>Card Number</th>
            <th className={styles.cell}>Balance</th>
            <th className={styles.cell}>Limit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.cell}>Alice</td>
            <td className={styles.cell}>1111 2222 3333 4444</td>
            <td className={styles.cell}>£10.24</td>
            <td className={styles.cell}>£5000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CardsList;
