import React from 'react';
import { storiesOf } from '@storybook/react';
import { Input } from '../components/Input';

storiesOf('Input', module)
  .add('Light default', () => (
    <Input
      id="some-id"
      type="text"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
    />
  ))
  .add('Light default with error', () => (
    <Input
      id="some-id"
      type="text"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
      error
    />
  ))
  .add('Dark default', () => (
    <Input
      dark
      id="some-id"
      type="text"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
    />
  ))
  .add('Dark default with error', () => (
    <Input
      dark
      id="some-id"
      type="text"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
      error
    />
  ))
  .add('Light large', () => (
    <Input
      large
      id="some-id"
      type="text"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
    />
  ))
  .add('Light large with error', () => (
    <Input
      large
      id="some-id"
      type="text"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
      error
    />
  ))
  .add('Dark large', () => (
    <Input
      dark
      large
      id="some-id"
      type="text"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
    />
  ))
  .add('Dark large with error', () => (
    <Input
      dark
      large
      id="some-id"
      type="text"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
      error
    />
  ))
  .add('Textarea default', () => (
    <Input
      id="some-id"
      type="textarea"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
    />
  ))
  .add('Textarea default large', () => (
    <Input
      id="some-id"
      type="textarea"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
      large
    />
  ))
  .add('Textarea dark default', () => (
    <Input
      id="some-id"
      type="textarea"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
      dark
    />
  ))
  .add('Textarea dark large', () => (
    <Input
      id="some-id"
      type="textarea"
      name="some-name"
      label="Hello"
      placeholder="Placeholder"
      required
      info="Some info here"
      dark
      large
    />
  ))
  .add('Submit default', () => (
    <Input
      id="some-id"
      type="submit"
      label="Hello"
    />
  ))
  .add('Submit default large', () => (
    <Input
      id="some-id"
      type="submit"
      label="Hello"
      large
    />
  ))
  .add('Submit dark default', () => (
    <Input
      id="some-id"
      type="submit"
      label="Hello"
      dark
    />
  ))
  .add('Submit dark large', () => (
    <Input
      id="some-id"
      type="submit"
      label="Hello"
      dark
      large
    />
  ));
