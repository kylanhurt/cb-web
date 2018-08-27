import React, {PureComponent} from 'react';
import {Col, Row, Container} from 'reactstrap';
import scrollToComponent from 'react-scroll-to-component';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Demos from './components/Demos';
import Features from './components/Features';
import Purchase from './components/Purchase';
import Footer from './components/Footer';
import FeatureRequest from './components/FeatureRequest';

const logo = process.env.PUBLIC_URL + '/img/landing/logo_svg.svg';

export default class Landing extends PureComponent {
  render() {
    return (
      <div className='landing'>
        <div className='landing__menu'>
          <Container>
            <Row>
              <Col md={12}>
                <div className='landing__menu-wrap'>
                  <p className='landing__menu-logo'>
                    <img src={logo} alt=''/>
                  </p>
                  <nav className='landing__menu-nav'>
                    <button
                      onClick={() => scrollToComponent(this.About, {offset: -50, align: 'top', duration: 1000})}>About
                      EasyDEV
                    </button>
                    <button
                      onClick={() => scrollToComponent(this.Demos, {offset: -50, align: 'top', duration: 1500})}>Demos
                    </button>
                    <button
                      onClick={() => scrollToComponent(this.FeatureRequest, {
                        offset: -50,
                        align: 'top',
                        duration: 2000
                      })}>
                      Feature request <span className='landing__menu-nav-new'/>
                    </button>
                    <button onClick={() => scrollToComponent(this.Features, {
                      offset: -50,
                      align: 'top',
                      duration: 2500
                    })}>Features
                    </button>
                    <a className='landing__btn' target='_blank' rel='noopener noreferrer'
                       href='https://themeforest.net/item/easypro-developer-friendly-react-bootstrap-4-admin-template/21798550'>Buy
                      now for $25</a>
                  </nav>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Header/>
        <span ref={(section) => {
          this.About = section;
        }}/>
        <Technologies/>
        <span ref={(section) => {
          this.Demos = section;
        }}/>
        <Demos/>
        <span ref={(section) => {
          this.FeatureRequest = section;
        }}/>
        <FeatureRequest/>
        <span ref={(section) => {
          this.Features = section;
        }}/>
        <Features/>
        <Purchase/>
        <Footer/>
      </div>
    )
  }
}