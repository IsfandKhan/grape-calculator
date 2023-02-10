import { useState } from 'react';
import { IAppState } from '../interfaces';

export function useCalculatorState(initialState: IAppState): [IAppState, React.Dispatch<Partial<IAppState>>] {
  const [calc, setCalc] = useState<IAppState>(initialState);

  function setCalculatedState(nextState: Partial<IAppState>): void {
    setCalc((prevState: IAppState) => ({ ...prevState, ...nextState }));
  }

  return [calc, setCalculatedState];
}
