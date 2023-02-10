import './Screen.style.css';

export interface IScreenProps {
  value: any;
}

const Screen = ({ value }: IScreenProps): JSX.Element => <div className="screen">{value}</div>;

export default Screen;
