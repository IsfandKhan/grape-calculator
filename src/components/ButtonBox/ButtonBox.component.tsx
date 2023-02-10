import { ButtonBoxPropsType } from '../../interfaces';
import './ButtonBox.style.css';

const ButtonBox = ({ children }: ButtonBoxPropsType): JSX.Element => (
  <div className="ButtonBox--button-box">{children}</div>
);

export default ButtonBox;
