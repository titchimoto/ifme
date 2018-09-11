// @flow
import React from 'react';
import renderHTML from 'react-render-html';
import css from './Input.scss';

export interface Props {
  id: string;
  type: string;
  label?: string;
  name?: string;
  value?: any;
  checked?: boolean;
  uncheckedValue?: any;
  onChange: Function;
}

const displayUnchecked = (props: Props) => {
  const { name, uncheckedValue } = props;
  return (
    <input
      name={name}
      type="hidden"
      value={uncheckedValue}
    />
  );
};

export const InputCheckbox = (props: Props) => {
  const { id, name, type, value, checked, label, onChange, uncheckedValue } = props;
  return (
    <div className={css.checkbox}>
      {typeof uncheckedValue !== 'undefined' ? displayUnchecked(props) : null}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        checked={checked}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => onChange(e)}
      />
      <div>{renderHTML(label)}</div>
    </div>
  );
};
