import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Navigation from '../navigation/Navigation';
import ChangelogList from './components/ChangelogList';
import NavigationBottom from '../navigation/NavigationBottom';
import {StickyContainer, Sticky} from 'react-sticky';

export default class Changelog extends PureComponent {
  render() {
    return (
      <Container className='documentation'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Documentation / Changelog</h3>
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
                  return <Navigation active='changelog' style={style} stick={isSticky}/>;
                }}
              </Sticky>
            </Col>
            <Col md={12} lg={9} xl={9} sm={12} xs={12}>
              <ChangelogList/>
            </Col>
          </Row>
        </StickyContainer>
        <NavigationBottom prevLink='/documentation/resources' prevTitle='Resources'/>
      </Container>
    )
  }
}
