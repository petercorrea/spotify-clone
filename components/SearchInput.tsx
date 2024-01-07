'use client';
import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import qs from 'query-string';
import { useEffect, useState } from 'react';
import Input from './Input';

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const deboundeValue = useDebounce(value, 500);

  useEffect(() => {
    const query = {
      title: deboundeValue,
    };

    const url = qs.stringifyUrl({
      url: '/search',
      query: query,
    });

    router.push(url);
  }, [deboundeValue, router]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
