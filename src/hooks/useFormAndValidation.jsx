import { useState, useCallback, useEffect } from "react";
export function useFormAndValidation() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    avatar: "",
    imageUrl: "",
  });
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [delayedErrors, setDelayedErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedErrors(errors);
    }, 900);
    return () => clearTimeout(timer);
  }, [errors]);
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setDelayedErrors({});
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    errors: delayedErrors,
    isValid,
    handleChange,
    resetForm,
    setErrors,
  };
}
