import React, { useState } from "react";

function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue != null ? JSON.parse(storedValue) : initialValue;
  });

  const setLocalStorageValue = (newValue: any) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setLocalStorageValue];
}

export default useLocalStorage;
