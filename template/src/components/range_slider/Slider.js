import 'rc-slider/assets/index.css';
import React, {PureComponent} from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';

const Handle = Slider.Handle;

const handle = (props) => {
  const {value, index, ...restProps} = props;
  return (
    <Tooltip
      prefixCls='rc-slider-tooltip'
      overlay={value}
      visible={true}
      placement='top'
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

export default class SliderTheme extends PureComponent {
  static propTypes = {
    marks: PropTypes.object,
    value: PropTypes.number,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    tipFormatter: PropTypes.func
  };
  
  render() {
    
    return (
      <div className='slider'>
        <div className='slider__min'>
          <p>{this.props.tipFormatter ? this.props.tipFormatter(this.props.min) : this.props.min}</p>
        </div>
        <div className='slider__max'>
          <p>{this.props.tipFormatter ? this.props.tipFormatter(this.props.max) : this.props.max}</p>
        </div>
        <Slider min={this.props.min} max={this.props.max} defaultValue={this.props.value}
                handle={handle} marks={this.props.marks} tipFormatter={this.props.tipFormatter}/>
      </div>
    )
  }
}