import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.css';

const InputField = ({ id, label, type }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
};

InputField.defaultProps = {
  type: 'text',
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default InputField;
