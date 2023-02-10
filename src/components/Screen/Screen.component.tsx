import { ScreenPropsType } from '../../interfaces';
import './Screen.style.css';

const Screen = ({ value }: ScreenPropsType): JSX.Element => <div className="Screen--screen">{value}</div>;

export default Screen;
