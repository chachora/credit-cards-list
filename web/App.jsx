import React, { useCallback, useEffect, useState } from 'react';
import CardsList from './components/CardsList';
import AddCardForm from './components/AddCardForm';
import api from './api/credit-card';

const cardInitialState = {
  name: '',
  number: '',
  limit: '',
};

const App = () => {
  const [card, setCard] = useState(cardInitialState);
  const [cards, setCards] = useState([]);
  const [errors, setErrors] = useState({});

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

  const handleCardChange = useCallback(
    event => setCard({ ...card, [event.target.id]: event.target.value }),
    [card]
  );

  const handleCardSubmit = useCallback(async () => {
    try {
      const newCreditCard = await api.addCreditCard(card);
      setCards([...cards, newCreditCard]);
      setCard(cardInitialState);
      setErrors([]);
    } catch (e) {
      if (e.validations) {
        setErrors(e.validations);
      } else alert(e.message);
    }
  }, [card, cards]);

  return (
    <>
      <h2>Credit Card System</h2>
      <AddCardForm
        card={card}
        errors={errors}
        onChange={handleCardChange}
        onSubmit={handleCardSubmit}
      />
      <CardsList cards={cards} />
    </>
  );
};

export default App;
