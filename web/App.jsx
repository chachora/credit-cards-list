import React from 'react';
import CardsList from './components/CardsList';
import AddCardForm from './components/AddCardForm';

const App = () => {
  return (
    <>
      <h2>Credit Card System</h2>
      <AddCardForm />
      <CardsList />
    </>
  );
};

export default App;
