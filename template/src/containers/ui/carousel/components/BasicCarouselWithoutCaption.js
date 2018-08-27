import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Carousel from '../../../../components/carousel/CarouselSingle';

const Slide1 = process.env.PUBLIC_URL + '/img/5.png';
const Slide2 = process.env.PUBLIC_URL + '/img/6.png';

export default class BasicCarouselWithoutCaption extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Basic carousel without caption</h5>
              <h5 className='subhead'>Use the component <span className='red-text'>CarouselSingle</span></h5>
            </div>
            <Carousel>
              <div>
                <img src={Slide1} alt='slide'/>
              </div>
              <div>
                <img src={Slide2} alt='slide'/>
              </div>
              <div>
                <img src={Slide1} alt='slide'/>
              </div>
              <div>
                <img src={Slide2} alt='slide'/>
              </div>
            </Carousel>
          </CardBody>
        </Card>
      </Col>
    )
  }
}