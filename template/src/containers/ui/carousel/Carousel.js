import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import BasicCarousel from './components/BasicCarousel';
import BasicCarouselWithoutCaption from './components/BasicCarouselWithoutCaption';
import BasicCarouselWithCaption from './components/BasicCarouselWithCaption';

export default class Carousel extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Carousel</h3>
            <h3 className='page-subhead subhead'>Use this elements, if you want to show some hints or additional
              information</h3>
          </Col>
        </Row>
        <Row>
          <BasicCarousel/>
          <BasicCarouselWithoutCaption/>
          <BasicCarouselWithCaption/>
        </Row>
      </Container>
    )
  }
}

