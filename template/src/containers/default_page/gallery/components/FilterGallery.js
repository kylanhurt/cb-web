import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Gallery from '../../../../components/Gallery';
import Items from './imgs';

const tags = [
  {tag: 'sneakers', title: 'sneakers'},
  {tag: 'cap', title: 'cap'},
  {tag: 'watch', title: 'watch'},
  {tag: 'glasses', title: 'glasses'}
];

export default class FilterGallery extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Filter Gallery</h5>
            </div>
            <Gallery images={Items} tags={tags}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}