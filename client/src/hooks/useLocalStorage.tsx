/* eslint-disable require-jsdoc */
import { useEffect, useState } from "react";

function useLocalStorage(
  key: any,
  initialValue: { theme: string; responsiveFontSizes: boolean }
) {
  const [data, setData] = useState(initialValue);
  useEffect(() => {
    const getData = window.localStorage.getItem(key);

    if (getData) {
      setData(JSON.parse(getData));
    }
  }, [key]);

  const storeData = (updateValue: any) => {
    setData(updateValue);
    window.localStorage.setItem(key, JSON.stringify(updateValue));
  };

  return {
    data,
    storeData,
  };
}

export default useLocalStorage;
