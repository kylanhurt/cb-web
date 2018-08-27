import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import EditTable from '../../../../components/table/EditableTable';

export default class EditableTable extends PureComponent {
  
  constructor(props) {
    super(props);
    this.heads = [
      {
        key: 'id',
        name: '#',
        width: 80
      },
      {
        key: 'first',
        name: 'First Name',
        editable: true
      },
      {
        key: 'last',
        name: 'Last Name',
        editable: true
      },
      {
        key: 'user',
        name: 'Username',
        editable: true
      },
      {
        key: 'age',
        name: 'Age',
        editable: true
      },
      {
        key: 'date',
        name: 'Date',
        editable: true
      },
      {
        key: 'location',
        name: 'Location',
        editable: true
      },
      {
        key: 'work',
        name: 'Work',
        editable: true
      }
    ];
    
    this.state = {rows: this.createRows(10)};
    this.createRows = this.createRows.bind(this);
    this.getRandomDate = this.getRandomDate.bind(this);
  }
  
  getRandomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };
  
  createRows = (numberOfRows) => {
    let rows = [];
    for (let i = 1; i < numberOfRows + 1; i++) {
      rows.push({
        id: i,
        first: ['Maria', 'Bobby  ', 'Alexander'][Math.floor((Math.random() * 3))],
        last: ['Morisson', 'Brown  ', 'Medinberg'][Math.floor((Math.random() * 3))],
        user: ['@dragon', '@hamster', '@cat'][Math.floor((Math.random() * 3))],
        age: Math.min(100, Math.round(Math.random() * 30) + 20),
        date: this.getRandomDate(new Date(2002, 3, 1), new Date(1954, 3, 1)),
        location: ['Melbourne', 'Tokio', 'Moscow', 'Rome'][Math.floor((Math.random() * 4))],
        work: ['Nova Soft', 'Dog Shop', 'Aspirity', 'Business Bro', 'Starlight'][Math.floor((Math.random() * 5))]
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
              <h5 className='bold-text'>Editable table</h5>
              <h5 className='subhead'>Use table with column's option <span className='red-text'>editable</span></h5>
            </div>
            <EditTable heads={this.heads} rows={this.state.rows}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}