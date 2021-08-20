import { useState } from 'react';

export const useInput = (defaultValue = '') => {
    const [value, setvalue] = useState(defaultValue);

    const handleChange = (event) => {
        setvalue(event.target.value);
    }

    const reset = () => {
        setvalue('');
    }

    return {
        value,
        handleChange,
        reset,
    };
}