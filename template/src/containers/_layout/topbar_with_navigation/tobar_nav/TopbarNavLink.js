import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Badge} from 'reactstrap';

export default class TopbarNavLink extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    route: PropTypes.string.isRequired,
    new: PropTypes.bool,
  };
  
  render() {
    return (
      <Link className='topbar__link' to={this.props.route}>
        {this.props.icon ? <span className={`topbar__link-icon lnr lnr-${this.props.icon}`}/> : ''}
        <p className='topbar__link-title'>
          {this.props.title}
          {this.props.new ? <Badge className='topbar__link-badge'><span>New</span></Badge> : ''}
        </p>
      </Link>
    )
  }
}