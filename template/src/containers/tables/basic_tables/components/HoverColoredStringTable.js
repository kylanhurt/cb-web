import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Table from '../../../../components/table/Table';

export default class HoverColoredStringTable extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Hover Colored string table</h5>
              <h5 className='subhead'>Use default table with property <span className='red-text'>hover</span></h5>
            </div>
            <Table hover responsive>
              <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Provider</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Maria</td>
                <td>Morisson</td>
                <td>@dragon</td>
                <td>MaxiPro</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bobby</td>
                <td>Brown</td>
                <td>@boboby</td>
                <td>ColorWorld</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Alexander</td>
                <td>Medinberg</td>
                <td>@medimedi</td>
                <td>SkyNet</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Vera</td>
                <td>Lori</td>
                <td>@lori</td>
                <td>Profinet</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Maria</td>
                <td>Morisson</td>
                <td>@dragon</td>
                <td>SkyNet</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Bobby</td>
                <td>Brown</td>
                <td>@boboby</td>
                <td>Profinet</td>
              </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    )
  }
}