import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot'

import CheckIcon from 'mdi-react/CheckIcon';
import PaperclipIcon from 'mdi-react/PaperclipIcon';
import StarIcon from 'mdi-react/StarIcon';

export default class EmailListItem extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    preview: PropTypes.string,
    attach: PropTypes.bool,
    favorite: PropTypes.bool,
    time: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      favorite: this.props.favorite
    };

    this.onFavorite = this.onFavorite.bind(this);
  }

  onFavorite(e) {
    e.preventDefault();
    this.setState({favorite: !this.state.favorite});
  }

  render() {
    return (
      <tr className='inbox__email-list-item'>
        <td>
          <label
            className='checkbox-btn inbox__email-list-item-checkbox'>
            <input className='checkbox-btn__checkbox' type='checkbox'/>
            <span className='checkbox-btn__checkbox-custom'>
            <CheckIcon/>
          </span>
          </label>
        </td>
        <td onClick={this.onFavorite}>
          <StarIcon className={`inbox__favorite${this.state.favorite ? ' active' : ''}`}/>
        </td>
        <td onClick={this.props.onClick}>{this.props.name}</td>
        <td onClick={this.props.onClick} className='inbox__email-table-preview'>
          <Dotdotdot clamp={2}>{this.props.preview}</Dotdotdot>
        </td>
        <td onClick={this.props.onClick}>{this.props.attach ? <PaperclipIcon/> : ''}</td>
        <td onClick={this.props.onClick} className='inbox__email-table-date'>{this.props.time}</td>
      </tr>
    )
  }
}