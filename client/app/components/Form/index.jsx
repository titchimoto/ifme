// @flow
import React from 'react';
import { Input } from '../../components/Input';
import { InputLabel } from '../../components/Input/InputLabel';
import css from './Form.scss';

export interface Field {
  id: string;
  type: string;
  name?: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  value?: any;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  info?: string;
  minLength?: number;
  maxLength?: number;
  dark?: boolean;
  large?: boolean;
  fields?: any;
  uncheckedValue?: any;
}

export interface Props {
  fields: Field[];
}

export interface State {
  fields: Field[];
}

export class Form extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { fields: props.fields };
  }

  handleCheckboxErrors = (field: Field) => {
    const name = field.fields[0].name;
    const subFields = Array.from(window.document.getElementsByName(name));
    return !subFields.filter(item => item.checked).length;
  }

  handleErrors = (e: SyntheticEvent<HTMLInputElement>) => {
    const { fields } = this.state;
    let foundError = false;
    const newFields = fields.map((field: Field) => {
      const newField = Object.assign({}, field);
      if (field.required && field.type !== 'submit') {
        newField.error = field.type === 'checkbox' ? this.handleCheckboxErrors(field)
          : !window.document.getElementById(field.id).value;
        foundError = newField.error ? true : foundError;
      }
      return newField;
    });
    if (foundError) {
      e.preventDefault();
    }
    this.setState({ fields: newFields });
  }

  displayInput = (field: Field) => (
    <Input
      id={field.id}
      type={field.type}
      name={field.name}
      label={field.label}
      placeholder={field.placeholder}
      error={field.error}
      value={field.value}
      readonly={field.readonly}
      disabled={field.disabled}
      required={field.required}
      info={field.info}
      minLength={field.minLength}
      maxLength={field.maxLength}
      dark={field.dark}
      large={field.large}
      key={field.id}
      checked={field.checked}
      uncheckedValue={field.uncheckedValue}
      onClick={field.type === 'submit' ?
        (e: SyntheticEvent<HTMLInputElement>) => this.handleErrors(e) : null}
    />
  );

  displayField = (field: Field) => {
    const inputLabel = (
      <InputLabel
        label={field.label}
        required={field.required}
        info={field.info}
        id={field.id}
        error={field.error}
        active={field.active}
        dark={field.dark}
        large={field.large}
      />
    );
    if (field.type === 'checkbox') {
      return (
        <div>
          {inputLabel}
          {field.fields.map((subField: Field) => this.displayInput(subField))}
        </div>
      );
    }
    if (field.type === 'select') {
      return (
        <div>
          {inputLabel}
          <select
            name={field.name}
            id={field.id}
          >
            {field.fields.map((subField: Field) => this.displayInput(subField))}
          </select>
        </div>
      );
    }
    return this.displayInput(field);
  }

  render() {
    const { fields } = this.state;
    return (
      <div className={css.form}>
        {fields.map((field: Field) => this.displayField(field))}
      </div>
    );
  }
}
