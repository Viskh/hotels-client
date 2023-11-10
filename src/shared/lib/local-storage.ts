export const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = <T>(key: string, shouldParse = false) => {
  const value = localStorage.getItem(key);

  if (value) {
    return (shouldParse ? JSON.parse(value) : value) as T;
  }

  return value as null;
};

export const deleteFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
