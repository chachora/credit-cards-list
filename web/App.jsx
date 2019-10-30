import React, { useEffect, useState } from 'react';
import CardsList from './components/CardsList';
import AddCardForm from './components/AddCardForm';
import api from './api/credit-card';

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.getCreditCards();
      setCards(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2>Credit Card System</h2>
      <AddCardForm />
      <CardsList cards={cards} />
    </>
  );
};

export default App;
