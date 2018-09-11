// @flow
import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import { EditorState } from 'draft-js';
import { inputClassNames } from './utils';
import css from './InputTextarea.scss';

export interface Props {
  id: string;
  name: string;
  value?: string;
  required?: boolean;
  dark?: boolean;
  large?: boolean;
}

export interface State {
  editorState: any;
  value?: string;
}

export class InputTextarea extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      editorState: EditorState.createWithContent(stateFromHTML(props.value || '')),
    };
    this.onEditorStateChange = (editorState: any) => {
      const contentValueHTML = stateToHTML(editorState.getCurrentContent());
      const contentValue = contentValueHTML === '<p><br></p>' ? '' : contentValueHTML;
      this.setState({ editorState, value: contentValue });
    };
  }

  displayEditor = () => {
    const { editorState } = this.state;
    return (
      <Editor
        toolbarClassName={css.toolbar}
        toolbar={{
          options: ['inline', 'list'],
          inline: {
            className: css.toolbarIcons,
            inDropdown: false,
            options: ['bold', 'italic', 'underline', 'strikethrough'],
          },
          list: {
            className: css.toolbarIcons,
            inDropdown: false,
            options: ['unordered', 'ordered'],
          },
        }}
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}
      />
    );
  }

  render() {
    const { id, name, required, dark, large } = this.props;
    const { editorState, value } = this.state;
    const contentValue = value && value.length ?
      stateToHTML(editorState.getCurrentContent()) : '';
    return (
      <div className={inputClassNames(dark, large)}>
        {this.displayEditor()}
        <input
          type="hidden"
          value={contentValue}
          id={id}
          name={name}
          required={required}
        />
      </div>
    );
  }
}
