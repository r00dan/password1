import { Button, Input } from 'components';
import { useLockUnlock } from 'hooks';

import style from './LockScreen.module.scss';

export function LockScreen() {
  const { code, isCodeNotFilled, handleChangeCode, unlock } = useLockUnlock();
  return (
    <div className={style.root}>
      <div className={style.form}>
        <Input
          id="lockCode"
          value={code}
          maxLength={4}
          onChange={handleChangeCode}
        />
      </div>
      <Button
        text="Unlock"
        disabled={isCodeNotFilled}
        onClick={unlock}
      />
    </div>
  );
}
