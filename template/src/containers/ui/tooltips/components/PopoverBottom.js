import React, {PureComponent} from 'react';
import {ButtonToolbar, Card, CardBody, Col, Button, Popover, PopoverBody, PopoverHeader} from 'reactstrap';

export default class PopoverBottom extends PureComponent {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  
  render() {
    return (
      <Col sm={12} md={6} lg={6} xl={3}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Popover on Bottom</h5>
              <h5 className='subhead'>Use popover with placement <span className='red-text'>bottom</span></h5>
            </div>
            <ButtonToolbar className='btn-toolbar--center'>
              <Button id='PopoverBottom' onClick={this.toggle} outline>
                Popover on Bottom
              </Button>
              <Popover placement='bottom' isOpen={this.state.popoverOpen} target='PopoverBottom'
                       toggle={this.toggle}>
                <PopoverHeader>Popover on Bottom</PopoverHeader>
                <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
                  lacinia quam venenatis vestibulum.</PopoverBody>
              </Popover>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}