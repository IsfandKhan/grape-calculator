import { MouseEvent } from 'react';
import { useCalculatorState } from './hooks';
import { Wrapper, Screen, Button, ButtonBox } from './components';
import { removeSpaces, toLocaleString } from './utils';
import { CALCULATOR_CONFIG } from './config';

const App = (): JSX.Element => {
  const [calc, setCalc] = useCalculatorState({ sign: '', num: 0, res: 0 });

  const numClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        num:
          calc.num === 0 && value === '0'
            ? '0'
            : Number(removeSpaces(calc.num)) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).innerHTML;

    setCalc({ num: !calc.num.toString().includes('.') ? calc.num + value : calc.num });
  };

  const signClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).innerHTML;

    setCalc({ sign: value, res: !calc.res && calc.num ? calc.num : calc.res, num: 0 });
  };

  const equalsClickHandler = (): void => {
    if (calc.sign && calc.num) {
      const math = (a: number, b: number, sign: string) =>
        sign === '+' ? a + b : sign === '-' ? a - b : sign === 'X' ? a * b : a / b;

      setCalc({
        res:
          calc.num === '0' && calc.sign === '/'
            ? "Can't divide with 0"
            : toLocaleString(math(Number(removeSpaces(calc.res)), Number(removeSpaces(calc.num)), calc.sign)),
        sign: '',
        num: 0,
      });
    }
  };

  const invertClickHandler = (): void => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(Number(removeSpaces(calc.num)) * -1) : 0,
      res: calc.res ? toLocaleString(Number(removeSpaces(calc.res)) * -1) : 0,
      sign: '',
    });
  };

  const percentClickHandler = (): void => {
    let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
    let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

    setCalc({ num: (num /= Math.pow(100, 1)), res: (res /= Math.pow(100, 1)), sign: '' });
  };

  const resetClickHandler = (): void => setCalc({ sign: '', num: 0, res: 0 });

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {CALCULATOR_CONFIG.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === '=' ? 'equals' : undefined}
              value={btn}
              onClick={
                btn === 'C'
                  ? resetClickHandler
                  : btn === '+-'
                  ? invertClickHandler
                  : btn === '%'
                  ? percentClickHandler
                  : btn === '='
                  ? equalsClickHandler
                  : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
                  ? signClickHandler
                  : btn === '.'
                  ? commaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
