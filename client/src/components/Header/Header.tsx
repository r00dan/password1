import { useLockUnlock } from 'hooks';

import style from './Header.module.scss';

export function Header() {
  const { lock } = useLockUnlock();
  return (
    <div className={style.root}>
      <h1>Password1</h1>
      <div
        className={style.lock}
        onClick={lock}
      >
        🔒
      </div>
    </div>
  );
}
