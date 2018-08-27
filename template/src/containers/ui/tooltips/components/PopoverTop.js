import React, {PureComponent} from 'react';
import {ButtonToolbar, Card, CardBody, Col, Button, Popover, PopoverBody, PopoverHeader} from 'reactstrap';

export default class PopoverTop extends PureComponent {
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
              <h5 className='bold-text'>Popover on Top</h5>
              <h5 className='subhead'>Use popover with placement <span className='red-text'>top</span></h5>
            </div>
            <ButtonToolbar className='btn-toolbar--center'>
              <Button id='PopoverTop' onClick={this.toggle} outline>
                Popover on Top
              </Button>
              <Popover placement='top' isOpen={this.state.popoverOpen} target='PopoverTop'
                       toggle={this.toggle}>
                <PopoverHeader>Popover on Top</PopoverHeader>
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