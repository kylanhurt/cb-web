import React, {Component} from 'react';
import {EditorState, convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';

const ToolbarOptions = {
  options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'emoji', 'image', 'history'],
  inline: {
    options: ['bold', 'italic', 'underline']
  }
};

export default class TextEditorTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }
  
  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    });
    if (this.props.onChange)
      this.props.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  };
  
  render() {
    const {editorState} = this.state;
    return (
      <div className='text-editor'>
        <Editor
          editorState={editorState}
          wrapperClassName='demo-wrapper'
          editorClassName='demo-editor'
          onEditorStateChange={this.onEditorStateChange}
          toolbar={ToolbarOptions}
        />
      </div>
    )
  }
}