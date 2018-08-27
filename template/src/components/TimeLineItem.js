import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class TimeLineIcon extends PureComponent {
  static propTypes = {
    type: PropTypes.string
  };
  
  render() {
    let Icon;
    
    switch (this.props.type) {
      case 'work':
        Icon = <span className='lnr lnr-briefcase'/>;
        break;
      case 'video':
        Icon = <span className='lnr lnr-film-play'/>;
        break;
      case 'file':
        Icon = <span className='lnr lnr-file-add'/>;
        break;
      default:
        break;
    }
    
    return (
      <div className={`timeline__icon ${this.props.type}`}>
        {Icon}
      </div>
    )
  }
}

export default class TimeLineItem extends PureComponent {
  static propTypes = {
    type: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string
  };
  
  render() {
    return (
      <div className='timeline__item'>
        {this.props.img ?
          <div className='timeline__icon'><img src={this.props.img} alt='img'/></div> :
          <TimeLineIcon type={this.props.type}/>}
        <div className='timeline__content'>
          <h5 className='timeline__title'>{this.props.title}</h5>
          <h4 className='subhead timeline__date'>{this.props.date}</h4>
          {this.props.children}
        </div>
      </div>
    )
  }
}