import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Navigation from '../navigation/Navigation';
import IntroductionFeatures from './components/IntroductionFeatures';
import NavigationBottom from '../navigation/NavigationBottom';
import {StickyContainer, Sticky} from 'react-sticky';

export default class Introduction extends PureComponent {
  render() {
    return (
      <Container className='documentation'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Documentation / Introduction</h3>
          </Col>
        </Row>
        <StickyContainer>
          <Row className='documentation__main'>
            <Col md={12} lg={4} xl={3} sm={12} xs={12} className='documentation__nav'>
              <Sticky topOffset={-90} bottomOffset={95}>
                {({
                    isSticky,
                    style,
                  }) => {
                  return <Navigation active='introduction' style={style} stick={isSticky}/>;
                }}
              </Sticky>
            </Col>
            <Col md={12} lg={8} xl={9} sm={12} xs={12}>
              <IntroductionFeatures/>
            </Col>
          </Row>
        </StickyContainer>
        <NavigationBottom nextLink='/documentation/installation' nextTitle='Installation'/>
      </Container>
    )
  }
}