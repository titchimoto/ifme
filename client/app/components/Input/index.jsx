// @flow
import React from 'react';
import { InputTextarea } from './InputTextarea';
import { InputLabel } from './InputLabel';
import { InputSubmit } from './InputSubmit';
import { InputCheckbox } from './InputCheckbox';
import { inputClassNames } from './utils';

export interface Props {
  id: string;
  type: 'text' | 'textarea' | 'submit' | 'checkbox' | 'number' | 'time' | 'date' | 'option';
  name?: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  dark?: boolean;
  large?: boolean;
  value?: any;
  readonly?: boolean;
  disabled?: boolean;
  required?: boolean;
  info?: string;
  minLength?: number;
  maxLength?: number;
  onClick?: Function;
  checked?: boolean;
  selected?: boolean;
  uncheckedValue?: any;
  min?: number;
  max?: number;
}

export interface State {
  value: string | number;
  checked: boolean;
  selected: boolean;
  active: boolean;
}

export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { value: props.value || '', active: false, checked: !!props.checked, selected: !!props.selected };
  }

  onChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { checked } = this.state;
    const { type } = this.props;
    if (type !== 'checkbox') {
      e.preventDefault();
    }
    this.setState({
      value: type !== 'checkbox' ? null : e.currentTarget.value,
      checked: type === 'checkbox' ? !checked : null,
    });
  };

  onFocus = () => {
    this.setState({ active: true });
  };

  onBlur = () => {
    this.setState({ active: false });
  };

  displayInput = () => (
    <input
      className={inputClassNames(this.props.dark, this.props.large)}
      id={this.props.id}
      type={this.props.type}
      name={this.props.name}
      value={this.state.value}
      placeholder={this.props.placeholder}
      readOnly={this.props.readonly}
      disabled={this.props.disabled}
      required={this.props.required}
      minLength={this.props.minLength}
      maxLength={this.props.maxLength}
      min={this.props.min}
      max={this.props.max}
      onChange={(e: SyntheticEvent<HTMLInputElement>) => this.onChange(e)}
      onFocus={() => this.onFocus()}
      onBlur={() => this.onBlur()}
    />
  );

  displaySubmit = () => {
    const { id, large, dark, onClick } = this.props;
    const { value } = this.state;
    return (
      <InputSubmit
        id={id}
        large={large}
        dark={dark}
        onClick={onClick ? (e: SyntheticEvent<HTMLInputElement>) => onClick(e) : null}
        value={value}
      />
    );
  }

  displayTextarea = () => {
    const { id, name, required, dark, large } = this.props;
    const { value } = this.state;
    return (
      <InputTextarea
        value={value}
        id={id}
        name={name}
        required={required}
        dark={dark}
        large={large}
      />
    );
  }

  displayCheckbox = () => {
    const { id, name, label, type, value, uncheckedValue } = this.props;
    const { checked } = this.state;
    return (
      <InputCheckbox
        id={id}
        name={name}
        type={type}
        value={value}
        checked={checked}
        uncheckedValue={uncheckedValue}
        label={label}
        onChange={(e: SyntheticEvent<HTMLInputElement>) => this.onChange(e)}
      />
    );
  }

  displayOption = () => {
    const { label } = this.props;
    const { value, selected } = this.state;
    return <option value={value} selected={selected}>{label}</option>;
  }

  displayLabel = () => {
    const { label, required, info, id, error, dark, large } = this.props;
    const { active } = this.state;
    return (
      <InputLabel
        label={label}
        required={required}
        info={info}
        id={id}
        error={error}
        active={active}
        dark={dark}
        large={large}
      />
    );
  }

  render() {
    const { type } = this.props;
    if (type === 'submit') return this.displaySubmit();
    if (type === 'checkbox') return this.displayCheckbox();
    if (type === 'option') return this.displayOption();
    return (
      <div>
        {this.displayLabel()}
        {type === 'textarea' ? this.displayTextarea() : this.displayInput()}
      </div>
    );
  }
}
