import { MouseEventHandler, PropsWithChildren } from 'react';

export type ValueType = string | number;
export type ReactClassNameType = string | undefined;
export type ButtonBoxPropsType = PropsWithChildren;
export type WrapperPropsType = PropsWithChildren;
export type ScreenPropsType = PropsWithChildren<{ value: ValueType, expression: string }>;
export type ButtonPropsType = PropsWithChildren<{
  className: ReactClassNameType;
  value: ValueType;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>;

export interface IAppState {
  sign: string;
  result: ValueType;
  number: ValueType;
}
