import { ReactNode } from "react";
import { useRecoilValue } from "recoil";

import { Header, LockScreen } from "components";
import { lockScreenState } from "store";

import style from './Layout.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  const isLocked = useRecoilValue(lockScreenState);
  return isLocked
  ? (
    <LockScreen />
  ) : (
    <div className={style.root}>
      <div className={style.content}>
        <Header />
        {children}
      </div>
    </div>
  );
}
