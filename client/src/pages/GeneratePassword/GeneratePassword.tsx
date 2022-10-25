import { ChangeEvent } from "react";

import { Button, Layout } from "components";

import style from './GeneratePassword.module.scss';

interface IGeneratePasswordProps {
  value: string;
  size: number;
  handleSizeChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordClick: () => void;
  handleUpdatePassword: () => void;
}

export function GeneratePassword({
  value,
  size,
  handleSizeChange,
  handlePasswordClick,
  handleUpdatePassword,
}: IGeneratePasswordProps) {
  return (
    <Layout>
      <div className={style.root}>
        <code
          className={style.password}
          onClick={handlePasswordClick}
        >
          {value}
        </code>
        <Button
          text="Update"
          onClick={handleUpdatePassword}
        />
        <div className={style.sizeInputWrapper}>
          <label htmlFor="passSize">Size: {size}</label>
          <input
            id="passSize"
            className={style.sizeInput}
            type="range"
            min={8}
            max={24}
            value={size}
            onChange={handleSizeChange}
          />
        </div>
      </div>
    </Layout>
  );
}
