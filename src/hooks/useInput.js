import { useState } from "react";
import Input from "../components/UI/Input"

const useInput = (initialValue = '', validate = null) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (validate) {
      setError(validate(newValue));
    }
  };

  return {
    value,
    error,
    handleChange,
    InputComponent: Input, 
  };
};

export default useInput;

