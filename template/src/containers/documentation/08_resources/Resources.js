import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Navigation from '../navigation/Navigation';
import ResourcesLinks from './components/ResourcesLinks';
import NavigationBottom from '../navigation/NavigationBottom';
import {StickyContainer, Sticky} from 'react-sticky';

export default class Resources extends PureComponent {
  render() {
    return (
      <Container className='documentation'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Documentation / Resources</h3>
          </Col>
        </Row>
        <StickyContainer>
          <Row className='documentation__main'>
            <Col md={12} lg={3} xl={3} sm={12} xs={12} className='documentation__nav'>
              <Sticky topOffset={-90} bottomOffset={95}>
                {({
                    isSticky,
                    wasSticky,
                    style,
                  }) => {
                  return <Navigation active='resources' style={style} stick={isSticky}/>;
                }}
              </Sticky>
            </Col>
            <Col md={12} lg={9} xl={9} sm={12} xs={12}>
              <ResourcesLinks/>
            </Col>
          </Row>
        </StickyContainer>
        <NavigationBottom prevLink='/documentation/navigation_item' prevTitle='Navigation Item'
                          nextLink='/documentation/changelog' nextTitle='Changelog'/>
      </Container>
    )
  }
}
