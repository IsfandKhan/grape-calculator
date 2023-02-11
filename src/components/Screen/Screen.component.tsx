import { ScreenPropsType } from '../../interfaces';
import './Screen.style.css';

const Screen = ({ value, expression }: ScreenPropsType): JSX.Element => {
    console.log(value, expression)
  return (
    <>
      <div className="Screen--screen">
        <div>{expression}</div>
        {!expression && <div>{value}</div>}
        </div>
    </>
  );
};

export default Screen;
