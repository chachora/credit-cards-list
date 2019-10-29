import React from 'react';
import InputField from './InputField';

const AddCardForm = () => {
  return (
    <div>
      <h4>Add</h4>
      <form>
        <InputField label="Name" id="name" />
        <InputField label="Card number" id="card_number" />
        <InputField label="Limit" id="limit" />
      </form>
      <button type="button">Add</button>
    </div>
  );
};

export default AddCardForm;
