import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';

export default class NavigationBottom extends PureComponent {
  static propTypes = {
    prevLink: PropTypes.string,
    prevTitle: PropTypes.string,
    nextLink: PropTypes.string,
    nextTitle: PropTypes.string
  };
  
  render() {
    return (
      <div className='documentation__nav-bottom'>
        <div className='documentation__nav-bottom-left'>
          {this.props.prevLink ?
            <Link to={this.props.prevLink}><ChevronLeftIcon/><p>{this.props.prevTitle}</p></Link> : ''}
        </div>
        <div className='documentation__nav-bottom-right'>
          {this.props.nextLink ?
            <Link to={this.props.nextLink}><p>{this.props.nextTitle}</p><ChevronRightIcon/></Link> : ''}
        </div>
      </div>
    )
  }
}