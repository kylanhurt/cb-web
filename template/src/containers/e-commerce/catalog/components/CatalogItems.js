import React, {PureComponent} from 'react';
import {Col} from 'reactstrap';
import ProductItems from '../../../../components/catalog/ProductItems';
import catalog_list from './catalog_list';

export default class CatalogItems extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <ProductItems items={catalog_list}/>
      </Col>
    )
  }
}