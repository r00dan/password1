import classNames from 'classnames';
import { ReactNode } from 'react';

import style from './Block.module.scss';

interface IBlockProps {
  children: ReactNode;
  className?: string;
}

export function Block({
  children,
  className,
}: IBlockProps) {
  return (
    <div className={classNames([
      style.root,
      className && className,
    ])}>
      {children}
    </div>
  );
}
