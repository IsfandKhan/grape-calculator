import { ButtonPropsType } from '../../interfaces';
import './Button.style.css';

const Button = ({ className, value, onClick }: ButtonPropsType): JSX.Element => (
  <button className={`Button--btn ${className}`} onClick={onClick}>
    {value}
  </button>
);

export default Button;
