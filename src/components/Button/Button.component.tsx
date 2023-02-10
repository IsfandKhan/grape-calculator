import { MouseEventHandler } from 'react';

import './Button.style.css';

export interface IButtonProps {
  className: string | undefined;
  value: any;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className, value, onClick }: IButtonProps): JSX.Element => (
  <button className={`btn ${className}`} onClick={onClick}>
    {value}
  </button>
);

export default Button;
