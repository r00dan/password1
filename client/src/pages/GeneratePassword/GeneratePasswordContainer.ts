import { ChangeEvent, createElement, useEffect, useState } from 'react';
import { customAlphabet } from 'nanoid';

import { GeneratePassword } from './GeneratePassword';

const abc = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!_-#$%^&*)(';

export function GeneratePasswordContainer() {
  const [value, setValue] = useState<string>('');
  const [size, setSize] = useState<number>(12);

  const handleSizeChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setSize(Number(value));
  const handlePasswordClick = () => navigator && navigator.clipboard.writeText(value);
  const handleUpdatePassword = () => setValue(customAlphabet(abc, size)());

  useEffect(() => {
    setValue(customAlphabet(abc, size)());
  }, [size]);

  return createElement(GeneratePassword, {
    value,
    size,
    handleSizeChange,
    handlePasswordClick,
    handleUpdatePassword,
  });
}
