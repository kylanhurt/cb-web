import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import TooltipTop from './components/TooltipTop';
import TooltipBottom from './components/TooltipBottom';
import TooltipRight from './components/TooltipRight';
import TooltipLeft from './components/TooltipLeft';
import PopoverTop from './components/PopoverTop';
import PopoverBottom from './components/PopoverBottom';
import PopeverRight from './components/PopoverRight';
import PopoverLeft from './components/PopoverLeft';

export default class TooltipsPopovers extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Tooltips & Popovers</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <TooltipTop/>
          <TooltipBottom/>
          <TooltipRight/>
          <TooltipLeft/>
          <PopoverTop/>
          <PopoverBottom/>
          <PopeverRight/>
          <PopoverLeft/>
        </Row>
      </Container>
    )
  }
}

