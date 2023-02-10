import { useState } from 'react';

export interface IState {
  res: number | string;
  sign: string;
  num: string | number;
}

export function useCalculatorState(initialState: IState): [IState, React.Dispatch<Partial<IState>>] {
  const [calc, setCalc] = useState<IState>(initialState);

  function setCalculatedState(nextState: Partial<IState>): void {
    setCalc((prevState: IState) => ({ ...prevState, ...nextState }));
  }

  return [calc, setCalculatedState];
}
