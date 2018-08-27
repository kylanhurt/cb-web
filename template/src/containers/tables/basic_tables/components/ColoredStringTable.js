import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Badge} from 'reactstrap';
import Table from '../../../../components/table/Table';

export default class ColoredStringTable extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Colored string table</h5>
              <h5 className='subhead'>Use default table with property <span className='red-text'>striped</span></h5>
            </div>
            <Table striped responsive>
              <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Status</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Maria</td>
                <td>Morisson</td>
                <td>@dragon</td>
                <td><Badge color='success'>Work</Badge></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bobby</td>
                <td>Brown</td>
                <td>@boboby</td>
                <td><Badge color='warning'>Vacation</Badge></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Alexander</td>
                <td>Medinberg</td>
                <td>@medimedi</td>
                <td><Badge color='warning'>Vacation</Badge></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Vera</td>
                <td>Lori</td>
                <td>@lori</td>
                <td><Badge color='success'>Work</Badge></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Maria</td>
                <td>Morisson</td>
                <td>@dragon</td>
                <td><Badge color='warning'>Vacation</Badge></td>
              </tr>
              <tr>
                <td>6</td>
                <td>Bobby</td>
                <td>Brown</td>
                <td>@boboby</td>
                <td><Badge color='success'>Work</Badge></td>
              </tr>
              <tr>
                <td>7</td>
                <td>Alexander</td>
                <td>Medinberg</td>
                <td>@medimedi</td>
                <td><Badge color='success'>Work</Badge></td>
              </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    )
  }
}