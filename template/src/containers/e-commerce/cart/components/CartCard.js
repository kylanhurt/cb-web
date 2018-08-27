import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import cart_list from './cart_list';
import Table from '../../../../components/table/Table';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import CartPurchase from './CartPurchase';

export default class CartCard extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card className='cart'>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Cart</h5>
            </div>
            <Table className='table--bordered cart__table' responsive>
              <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Tax</th>
                <th>Total</th>
                <th/>
              </tr>
              </thead>
              <tbody>
              {cart_list.map((ct, i) =>
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <span className='cart__preview-img'>
                    <img src={ct.img} alt='product_preview'/>
                    </span>
                    <span>{ct.title}</span>
                  </td>
                  <td>{ct.quantity}</td>
                  <td>${ct.price.toFixed(2)}</td>
                  <td>${ct.tax.toFixed(2)}</td>
                  <td>${ct.total.toFixed(2)}</td>
                  <td>
                    <button className='cart__table-btn'>
                      <DeleteForeverIcon/> Remove
                    </button>
                  </td>
                </tr>
              )}
              </tbody>
            </Table>
            <h5 className='cart__sub-total'>Sub-total: $328.00</h5>
            <CartPurchase onSubmit/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

