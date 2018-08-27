import React, {PureComponent} from 'react';
import {Badge} from 'reactstrap';
import Panel from '../../../../components/Panel';
import Table from '../../../../components/table/Table';

export default class RecentOrders extends PureComponent {
  render() {
    return (
      <Panel lg={12} title='Recent Orders'>
        <Table responsive className='table--bordered'>
          <thead>
          <tr>
            <th>#</th>
            <th>Invoice</th>
            <th>Customer Name</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>In-123356</td>
            <td>Lok Morisson</td>
            <td>Xiaomi Mi 6</td>
            <td>1</td>
            <td>2017/12/25</td>
            <td>Melbourne</td>
            <td><Badge color='success'>In Progress</Badge></td>
          </tr>
          <tr>
            <td>2</td>
            <td>In-254875</td>
            <td>Norman Brown</td>
            <td>Apple Iphone 6 Plus</td>
            <td>1</td>
            <td>2017/12/13</td>
            <td>Tokio</td>
            <td><Badge color='primary'>Completed</Badge></td>
          </tr>
          <tr>
            <td>3</td>
            <td>In-877868</td>
            <td>Sam Medinberg</td>
            <td>Xiaomi Mi 6</td>
            <td>1</td>
            <td>2017/12/13</td>
            <td>Moscow</td>
            <td><Badge color='success'>In Progress</Badge></td>
          </tr>
          <tr>
            <td>4</td>
            <td>In-619876</td>
            <td>Dave Morisson</td>
            <td>Apple Iphone 5 S</td>
            <td>1</td>
            <td>2017/12/07</td>
            <td>Melbourne</td>
            <td><Badge color='primary'>Completed</Badge></td>
          </tr>
          <tr>
            <td>5</td>
            <td>In-218778</td>
            <td>Klara Brown</td>
            <td>Apple Iphone 6 Plus</td>
            <td>1</td>
            <td>2017/12/05</td>
            <td>London</td>
            <td><Badge color='primary'>Completed</Badge></td>
          </tr>
          <tr>
            <td>6</td>
            <td>In-626268</td>
            <td>Molly Medinberg</td>
            <td>Apple Iphone 7 Plus</td>
            <td>1</td>
            <td>2017/12/01</td>
            <td>Rome</td>
            <td><Badge color='primary'>Completed</Badge></td>
          </tr>
          </tbody>
        </Table>
      </Panel>
    )
  }
}

