import classNames from 'classnames';
import style from './Button.module.scss';

interface IButtonProps {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export function Button({
  text,
  disabled = false,
  onClick,
}: IButtonProps) {
  return (
    <button
      className={classNames([
        style.root,
        disabled && style.disabled,
      ])}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
