import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Carousel from '../../../../components/carousel/CarouselMultiply';

const Slide1 = process.env.PUBLIC_URL + '/img/1.png';
const Slide2 = process.env.PUBLIC_URL + '/img/2.png';
const Slide3 = process.env.PUBLIC_URL + '/img/3.png';
const Slide4 = process.env.PUBLIC_URL + '/img/4.png';

export default class BasicCarousel extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Basic carousel</h5>
              <h5 className='subhead'>Use the component <span className='red-text'>CarouselMultiply</span></h5>
            </div>
            <Carousel>
              <div>
                <img src={Slide1} alt='slide'/>
              </div>
              <div>
                <img src={Slide2} alt='slide'/>
              </div>
              <div>
                <img src={Slide3} alt='slide'/>
              </div>
              <div>
                <img src={Slide4} alt='slide'/>
              </div>
            </Carousel>
          </CardBody>
        </Card>
      </Col>
    )
  }
}