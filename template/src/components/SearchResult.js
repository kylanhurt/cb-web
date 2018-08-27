import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class SearchResult extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    preview: PropTypes.string
  };
  
  render() {
    return (
      <div className='search-result'>
        <p className='search-result__title'>{this.props.title}</p>
        <p className='search-result__link'><a href={this.props.link}>{this.props.link}</a></p>
        <p className='search-result__preview'>{this.props.preview}</p>
      </div>
    );
  }
}