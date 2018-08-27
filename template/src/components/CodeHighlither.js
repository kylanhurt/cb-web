import React, {PureComponent} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import {darcula} from 'react-syntax-highlighter/styles/prism';
import PropTypes from 'prop-types';

export default class CodeHighlither extends PureComponent {
  static propTypes = {
    scss: PropTypes.bool
  };
  
  render() {
    return (
      <SyntaxHighlighter showLineNumbers language={this.props.scss ? 'scss' : 'jsx'} style={darcula}>
        {this.props.children}
      </SyntaxHighlighter>
    )
  }
}