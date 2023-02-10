export const toLocaleString = (num: string | number): string =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');

export const removeSpaces = (num: string | number): string => num.toString().replace(/\s/g, '');
