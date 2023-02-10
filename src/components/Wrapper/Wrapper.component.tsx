import { WrapperPropsType } from '../../interfaces';
import './Wrapper.style.css';

const Wrapper = ({ children }: WrapperPropsType): JSX.Element => <div className="Wrapper--wrapper">{children}</div>;

export default Wrapper;
