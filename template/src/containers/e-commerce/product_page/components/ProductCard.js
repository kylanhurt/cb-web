import React, {PureComponent} from 'react';
import {Card, CardBody, Col, ButtonToolbar} from 'reactstrap';
import ProductGallery from '../../../../components/catalog/ProductGallery';
import images from './imgs';
import ProductTabs from './ProductTabs';
import HeartIcon from 'mdi-react/HeartIcon';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import {Link} from 'react-router-dom';
import ColorSelect from '../../../../components/form/ColorSelect';

export default class ProductCard extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='product-card'>
              <ProductGallery images={images}/>
              <div className='product-card__info'>
                <h3 className='product-card__title'>French bulldog pillow</h3>
                <div className='product-card__rate'>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  <StarOutlineIcon/>
                  <a className='product-card__link' href=''>See all reviews</a>
                </div>
                <h1 className='product-card__price'>$17.19 <span className='product-card__old-price'>$23</span></h1>
                <p>Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression
                  for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved
                  as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable
                  cultivated admiration far. </p>
                <form className='form product-card__form'>
                  <div className='form__form-group'>
                    <label className='form__form-group-label product-card__form-label'>Select Color</label>
                    <div className='form__form-group-field'>
                      <ColorSelect options={[
                        {value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4'},
                        {value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4'},
                        {value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4'},
                      ]}/>
                    </div>
                  </div>
                  <ButtonToolbar className='product-card__btn-toolbar'>
                    <Link className='btn btn-primary' to='/e-commerce/cart'>Add to cart</Link>
                    {/*<Button color='primary'>Add to cart</Button>*/}
                    <button className='product-card__wish-btn'><HeartIcon/>Add to wishlist</button>
                  </ButtonToolbar>
                </form>
                <ProductTabs/>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}