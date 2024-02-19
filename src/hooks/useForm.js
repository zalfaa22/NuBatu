// useForm.js
import { useState } from 'react';

export const useForm = (initialState) => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleInputChange = ({target}) => {
    setInputValues({
      ...inputValues,
      [target.name]: target.value,
    });
  };

  const setForm = (newValues) => {
    setInputValues(newValues);
  };

  const resetForm = () => {
    setInputValues(initialState);
  }

  return {
    inputValues,
    handleInputChange,
    resetForm,
    setForm
  };
};
