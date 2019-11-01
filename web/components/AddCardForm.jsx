import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';

const AddCardForm = ({ card, errors, onChange, onSubmit }) => {
  const handleFieldChange = useCallback(event => onChange(event), [onChange]);

  const handleSubmit = useCallback(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div>
      <h4>Add</h4>
      <form>
        <InputField
          label="Name"
          id="name"
          value={card.name}
          error={errors.name}
          onChange={handleFieldChange}
        />
        <InputField
          label="Card number"
          id="number"
          value={card.number}
          error={errors.number}
          onChange={handleFieldChange}
        />
        <InputField
          label="Limit"
          id="limit"
          value={card.limit}
          error={errors.limit}
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
  card: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AddCardForm;
