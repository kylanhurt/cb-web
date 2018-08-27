import React, {PureComponent} from 'react';
import CheckIcon from 'mdi-react/CheckIcon';
import PropTypes from 'prop-types';

export default class ToDo extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    checked: PropTypes.bool
  };
  
  render() {
    return (
      <div className='todo'>
        <label className='checkbox-btn todo__checkbox'>
          <input className='checkbox-btn__checkbox' type='checkbox' name={this.props.id}
                 defaultChecked={this.props.checked}/>
          <span className='checkbox-btn__checkbox-custom'>
            <CheckIcon/>
        </span>
          <span className='checkbox-btn__label todo__checkbox-label'>{this.props.label}</span>
        </label>
      </div>
    )
  }
}
