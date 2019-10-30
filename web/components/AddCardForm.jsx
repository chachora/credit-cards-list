import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

const AddCardForm = ({ onSubmit }) => {
  const [card, setCard] = useState({
    name: '',
    number: '',
    limit: '',
  });

  const handleFieldChange = useCallback(
    event => setCard({ ...card, [event.target.id]: event.target.value }),
    [card]
  );

  const handleSubmit = useCallback(() => {
    onSubmit(card);
  }, [card, onSubmit]);

  return (
    <div>
      <h4>Add</h4>
      <form>
        <InputField
          label="Name"
          id="name"
          value={card.name}
          onChange={handleFieldChange}
        />
        <InputField
          label="Card number"
          id="number"
          value={card.number}
          onChange={handleFieldChange}
        />
        <InputField
          label="Limit"
          id="limit"
          value={card.limit}
          onChange={handleFieldChange}
        />
      </form>
      <button type="button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

AddCardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddCardForm;
