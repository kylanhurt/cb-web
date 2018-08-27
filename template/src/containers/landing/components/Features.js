import React, {PureComponent} from 'react';
import {Col, Row, Container} from 'reactstrap';

export default class Features extends PureComponent {
  render() {
    return (
      <section className='landing__section'>
        <Container>
          <Row>
            <Col md={12}>
              <h3 className='landing__section-title'>Main features</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/01.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>100+ <br/>Pages</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/02.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>Easy to <br/>Customize</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/03.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>Fully <br/>Responsive</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/04.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>Helpful <br/>Documentation</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/05.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>200+ UI <br/>Elements</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/06.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>Form <br/>Validation</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/07.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>Bootstrap 4 <br/>Framework</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/08.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>Dark & Light <br/>Layouts</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/09.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>Uniq <br/>Calendar</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/10.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>E-commerce <br/>Pages</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/11.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>Tables <br/>Set</p>
              </div>
            </Col>
            <Col lg={3} md={4} sm={6} xs={12}>
              <div className='landing__feature'>
                <div className='landing__feature-img-wrap'>
                  <img src={process.env.PUBLIC_URL + '/img/landing/features/12.png'} alt=''/>
                </div>
                <p className='landing__feature-title'>Lots of <br/>Charts</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}