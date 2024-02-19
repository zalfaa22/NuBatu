import { useState } from 'react';

export const UseFormBerita = (initialState = {}) => {
    const [inputValues, setInputValues] = useState(initialState);

    const resetForm = () => {
        setInputValues(initialState);
    };

    const handleInputChange = ({ target }) => {
        setInputValues({
            ...inputValues,
            [target.name]: target.value
        });
    };

    const setForm = (newValues) => {
        setInputValues(newValues);
    }

    // Mengembalikan objek yang berisi nilai-nilai dan fungsi-fungsi yang diperlukan
    return {
        inputValues,
        handleInputChange,
        resetForm,
        setForm
    };
};
