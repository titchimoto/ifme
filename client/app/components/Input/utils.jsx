// @flow
import css from './Input.scss';

export const inputClassNames = (dark: boolean, large: boolean) =>
  `${css.input} ${dark ? css.dark : ''} ${large ? css.large : ''}`;
