import classNames from "classnames";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

import style from './Input.module.scss';

interface IInputProps {
  id: string;
  value: string;
  label?: string;
  type?: HTMLInputTypeAttribute;
  maxLength?: number;
  isSquare?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  id,
  value,
  label,
  maxLength = 9999,
  isSquare = false,
  type = 'text',
  onChange,
}: IInputProps) {
  return (
    <div className={classNames([
      style.root,
      isSquare && style.square,
    ])}>
      {label && (
        <label
          className={style.label}
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={classNames([
          style.input,
          isSquare && style.square,
        ])}
        type={type}
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
