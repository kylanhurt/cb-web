import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon';

export default class ProjectMember extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    post: PropTypes.string,
    link: PropTypes.string.isRequired
  };
  
  render() {
    return (
      <div className='project-member'>
        <div className='project-member__avatar-wrap'>
          <img src={this.props.img} alt=''/>
        </div>
        <div>
          <p className='project-member__name'>{this.props.name}</p>
          <p className='project-member__post'>{this.props.post}</p>
        </div>
        <Link className='project-member__btn btn btn-outline-primary btn-sm icon'
              to={this.props.link}><EmailOutlineIcon/></Link>
      </div>
    )
  }
}