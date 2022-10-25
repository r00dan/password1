import { useNavigate } from "react-router-dom";

import style from './LinkIcon.module.scss';

interface ILinkIconProps {
  to: string;
}

export function LinkIcon({
  to,
}: ILinkIconProps) {
  const navigate = useNavigate();
  const handleClick = () => navigate(to);
  return (
    <div
      className={style.root}
      onClick={handleClick}
    >
      ➡️
    </div>
  );
}
