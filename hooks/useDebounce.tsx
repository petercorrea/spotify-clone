import { useEffect, useState } from 'react';

const useDebounce = <T,>(value: T, delay?: number): T => {
  const [deboundeValue, setDebounceValue] = useState<T>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return deboundeValue;
};

export default useDebounce;
