// // @ts-check
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * @param {string} [defaultValue='']
 * * @returns { React.InputHTMLAttributes<HTMLInputElement> }
 */
function useInputValue(defaultValue = '') {
  const [ value, setValue ] = useState(defaultValue);

  return {
    bind: {
      value,
      /**
       * @param { React.ChangeEvent<HTMLInputElement> } ev
       */
      onChange(ev) {
        const value = ev.target.value;
        return setValue(value === undefined || value === null ? '' : `${value}`.trim());
      }
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({ onCreate }) {
  const input = useInputValue('');

  /**
   * @param { React.FormEvent<HTMLFormElement> } ev 
   */
  const submitHandler = (ev) => {
    ev.preventDefault();

    if (/\S/.test(input.value())) {
      onCreate(input.value());
      input.clear('');
    }
  };

  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input { ...input.bind }></input>
      <button>Add todo</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default AddTodo
