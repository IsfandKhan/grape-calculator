import { ValueType } from './interfaces';

export const toLocaleString = (num: ValueType): string =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

export const removeSpaces = (num: ValueType): string => num.toString().replace(/\s/g, '');
