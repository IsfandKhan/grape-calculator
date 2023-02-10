import './Wrapper.style.css';

export interface IWrapperProps {
  children: any;
}

const Wrapper = ({ children }: IWrapperProps): JSX.Element => <div className="wrapper">{children}</div>;

export default Wrapper;
