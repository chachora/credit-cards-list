import React, { useCallback, useEffect, useState } from 'react';
import CardsList from './components/CardsList';
import AddCardForm from './components/AddCardForm';
import api from './api/credit-card';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.getCreditCards();
        setCards(result);
      } catch (e) {
        alert('Cannot fetch credit cards');
      }
    };

    fetchData();
  }, []);

  const handleCardSubmit = useCallback(
    async creditCard => {
      try {
        const newCreditCard = await api.addCreditCard(creditCard);
        setCards([...cards, newCreditCard]);
      } catch (e) {
        alert('Cannot add credit card');
      }
    },
    [cards]
  );

  return (
    <>
      <h2>Credit Card System</h2>
      <AddCardForm onSubmit={handleCardSubmit} />
      <CardsList cards={cards} />
    </>
  );
};

export default App;
