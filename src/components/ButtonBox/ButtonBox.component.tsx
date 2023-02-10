import './ButtonBox.style.css';

export interface IButtonBoxProps {
  children: JSX.Element | JSX.Element[];
}

const ButtonBox = ({ children }: IButtonBoxProps): JSX.Element => <div className="button-box">{children}</div>;

export default ButtonBox;
