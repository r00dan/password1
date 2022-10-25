import { ChangeEvent, useState } from 'react';
import { useRecoilState } from "recoil";

import { lockScreenState } from "store";

const CODE = 1234;

export function useLockUnlock() {
  const [isLocked, setLocked] = useRecoilState(lockScreenState);
  const [code, setCode] = useState<string>('');

  const isCodeNotFilled = code.length !== 4;
  const lock = () => setLocked(true);
  const unlock = () => verifyCode() && setLocked(false);
  const validateNumbers = (data: string) => !isNaN(Number(data));
  const verifyCode = () => Number(code) === CODE;
  const handleChangeCode = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => validateNumbers(value) && setCode(value);

  return {
    code,
    isLocked,
    isCodeNotFilled,
    lock,
    unlock,
    handleChangeCode,
  };
}
