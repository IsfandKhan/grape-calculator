import { MouseEvent, useState } from 'react';
import { useCalculatorState } from './hooks';
import { Wrapper, Screen, Button, ButtonBox } from './components';
import { removeSpaces, toLocaleString } from './utils';
import { CALCULATOR_CONFIG } from './config';
import { ValueType } from './interfaces';

const App = (): JSX.Element => {
  const [calc, setCalc] = useCalculatorState({ sign: '', number: 0, result: 0 });
  const [expression, setExpression] = useState('');

  const numClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).innerHTML;

    if (removeSpaces(calc.number).length < 16) {
      setCalc({
        number:
          calc.number === 0 && value === '0'
            ? '0'
            : Number(removeSpaces(calc.number)) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.number + value)))
            : toLocaleString(calc.number + value),
        result: !calc.sign ? 0 : calc.result,
      });
    }
  };

  const commaClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).innerHTML;

    setCalc({ number: !calc.number.toString().includes('.') ? calc.number + value : calc.number });
  };

  const signClickHandler = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const value = (e.target as HTMLButtonElement).innerHTML;

    setCalc({ sign: value, result: !calc.result && calc.number ? calc.number : calc.result, number: 0 });
  };

  const equalsClickHandler = (): void => {
    if (calc.sign && calc.number) {
      const math = (a: number, b: number, sign: string) =>
        sign === '+' ? a + b : sign === '-' ? a - b : sign === 'X' ? a * b : a / b;

      setCalc({
        result:
          calc.number === '0' && calc.sign === '/'
            ? "Can't divide with 0"
            : toLocaleString(math(Number(removeSpaces(calc.result)), Number(removeSpaces(calc.number)), calc.sign)),
        sign: '',
        number: 0,
      });
    }
  };

  const invertClickHandler = (): void =>
    setCalc({
      number: calc.number ? toLocaleString(Number(removeSpaces(calc.number)) * -1) : 0,
      result: calc.result ? toLocaleString(Number(removeSpaces(calc.result)) * -1) : 0,
      sign: '',
    });

  const percentClickHandler = (): void => {
    const number = calc.number ? parseFloat(removeSpaces(calc.number)) : 0;
    const result = calc.result ? parseFloat(removeSpaces(calc.result)) : 0;

    setCalc({ number: number / Math.pow(100, 1), result: result / Math.pow(100, 1), sign: '' });
  };

  const resetClickHandler = (): void => setCalc({ sign: '', number: 0, result: 0 });

  const onButtonClick = (e: MouseEvent<HTMLButtonElement>, btn: ValueType) => {
    e.preventDefault();
    switch (btn) {
      case 'C':
        setExpression('')
        return resetClickHandler();

      case '+-':
        setExpression('')
        return invertClickHandler();

      case '%':
        setExpression('')
        return percentClickHandler();

      case '=':
        setExpression('')
        return equalsClickHandler();

      case '/':
      case 'X':
      case '-':
      case '+':
        setExpression(expression + btn)
        return signClickHandler(e);

      case '.':
        setExpression(expression + btn)
        return commaClickHandler(e);

      default:
        setExpression(expression + btn);
        numClickHandler(e);
    }
  };

  return (
    <Wrapper>
      <Screen expression={expression} value={calc.result || calc.number} />
      <ButtonBox>
        {CALCULATOR_CONFIG.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === '=' ? 'Button--equals' : undefined}
              value={btn}
              onClick={(e) => onButtonClick(e, btn)}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};

export default App;
