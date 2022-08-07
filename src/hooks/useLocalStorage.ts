import { useState, useEffect } from "react";
import { ILocalStorage } from '../interfaces/LocalStorage';

const useLocalStorage = ({key, defaultValue}: ILocalStorage) => {
  const [state, setState] = useState(() => {
    //@ts-ignore
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;