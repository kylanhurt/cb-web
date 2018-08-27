import React, {PureComponent} from 'react';
import {Collapse} from 'reactstrap';
import PropTypes from 'prop-types';
import MinusIcon from 'mdi-react/MinusIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

export default class CollapseComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    className: PropTypes.string
  };
  
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.state = {collapse: false, class: 'closed', icon: <PlusIcon/>};
  }
  
  toggle() {
    this.setState({collapse: !this.state.collapse});
  }
  
  onEntering() {
    this.setState({class: 'opening', icon: <MinusIcon/>});
  }
  
  onEntered() {
    this.setState({class: 'opened', icon: <MinusIcon/>});
  }
  
  onExiting() {
    this.setState({class: 'closing', icon: <PlusIcon/>});
  }
  
  onExited() {
    this.setState({class: 'closed', icon: <PlusIcon/>});
  }
  
  render() {
    let Class = this.props.className ? this.props.className : '';
    
    return (
      <div className={`collapse__wrapper ${this.state.class} ${Class}`}>
        <div onClick={this.toggle} className='collapse__title'>
          {this.state.icon}
          <p>{this.props.title}<ChevronDownIcon/></p>
        </div>
        <Collapse
          isOpen={this.state.collapse}
          className='collapse__content'
          onEntering={this.onEntering}
          onEntered={this.onEntered}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <div>
            {this.props.children}
          </div>
        </Collapse>
      </div>
    );
  }
}