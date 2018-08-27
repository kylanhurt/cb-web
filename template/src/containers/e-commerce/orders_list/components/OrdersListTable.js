import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import EditTable from '../../../../components/table/EditableTable';
import Pagination from '../../../../components/Pagination';
import PropTypes from 'prop-types';

class MoneyFormatter extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired
  };
  
  render() {
    const value = '$' + this.props.value;
    return (
      <div>
        {value}
      </div>)
  }
}

class StatusFormatter extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired
  };
  
  render() {
    return (
      this.props.value === 'Enabled' ? <span className='badge badge-success'>Enabled</span> :
        <span className='badge badge-disabled'>Disabled</span>
    )
  }
}

export default class OrdersListTable extends PureComponent {
  
  constructor(props) {
    super(props);
    this.heads = [
      {
        key: 'id',
        name: 'ID',
        width: 80,
        sortable: true
      },
      {
        key: 'date',
        name: 'Date',
        sortable: true
      },
      {
        key: 'customer_name',
        name: 'Customer Name',
        sortable: true
      },
      {
        key: 'price',
        name: 'Price',
        sortable: true,
        formatter: MoneyFormatter
      },
      {
        key: 'tax',
        name: 'Tax',
        sortable: true,
        formatter: MoneyFormatter
      },
      {
        key: 'delivery',
        name: 'Delivery',
        sortable: true,
        formatter: MoneyFormatter
      },
      {
        key: 'quantity',
        name: 'Quantity',
        sortable: true
      },
      {
        key: 'status',
        name: 'Status',
        sortable: true,
        formatter: StatusFormatter,
        width: 110
      },
    ];
    
    this.state = {
      rows: this.createRows(17),
      pageOfItems: []
    };
    this.createRows = this.createRows.bind(this);
    this.getRandomDate = this.getRandomDate.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }
  
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({pageOfItems: pageOfItems});
  }
  
  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };
  
  createRows = (numberOfRows) => {
    let rows = [];
    
    for (let i = 1; i < numberOfRows + 1; i++) {
      rows.push({
        id: Math.min(99999, Math.round(Math.random() * 99999 + 1000)),
        date: this.getRandomDate(new Date(2017, 3, 1), new Date(2018, 3, 1)),
        customer_name: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
        price: Math.min(1000, Math.random() * 1000 + 20).toFixed(2),
        tax: Math.min(10, Math.random() * 10).toFixed(2),
        delivery: Math.min(10, Math.random() * 10).toFixed(2),
        quantity: Math.min(5, Math.round(Math.random() * 5 + 1)),
        status: ['Enabled', 'Disabled'][Math.floor((Math.random() * 2))],
      });
    }
    return rows;
  };
  
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Orders list</h5>
              {/*<h5 className='subhead'>Use default progress with class <span className='red-text'>progress-bar</span></h5>*/}
            </div>
            <p>Show
              <select className='select-options'>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
              </select>
              entries
            </p>
            <EditTable heads={this.heads} rows={this.state.rows}/>
            <Pagination items={this.state.rows} onChangePage={this.onChangePage}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}