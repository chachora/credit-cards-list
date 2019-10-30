import React, { useEffect, useState } from 'react';
import api from '../api/credit-card';
import styles from './CardsList.css';

const CardsList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getCreditCards();
      console.log(result);
      setCards(result);
    };
    fetchData();
  }, []);

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
          {cards.map(card => (
            <tr key={card.number}>
              <td className={styles.cell}>{card.name}</td>
              <td className={styles.cell}>{card.number}</td>
              <td className={styles.cell}>{`£${card.balance}`}</td>
              <td className={styles.cell}>{`£${card.limit}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardsList;
