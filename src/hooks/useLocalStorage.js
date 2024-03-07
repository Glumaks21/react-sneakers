import { useEffect, useState } from 'react';

const getValue = (key) => {
  const value = JSON.parse(localStorage.getItem(key));
  return value;
};

export default function useLocalStorage(key) {
  const [value, setValue] = useState(getValue(key));

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, value]);

  return [value, setValue];
}
