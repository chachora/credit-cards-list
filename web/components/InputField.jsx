import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './InputField.css';

const InputField = ({ id, error, label, type, value, onChange }) => {
  return (
    <div className={classNames(styles.container, { [styles.error]: error })}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} value={value} onChange={onChange} />
      <span className={styles.errorMessage}>{error}</span>
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
