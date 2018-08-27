import React, {PureComponent} from 'react';
import {Col} from 'reactstrap';
import catalog_list from '../../catalog/components/catalog_list';
import ProductItems from '../../../../components/catalog/ProductItems';

export default class RelatedItems extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <ProductItems items={catalog_list.slice(0, 4)}/>
      </Col>
    )
  }
}