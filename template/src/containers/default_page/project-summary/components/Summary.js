import React, {PureComponent} from 'react';
import {Card, CardBody, Col, Progress, Button} from 'reactstrap';
import Statistics from './Statistics';

export default class Summary extends PureComponent {
  render() {
    return (
      <Col md={12} lg={7} xl={9}>
        <Card>
          <CardBody>
            <div className='project-summary'>
              <Button className='project-summary__btn' outline size='sm'>Edit</Button>
              <div className='card__title'>
                <h5 className='bold-text'>Nes website for Global company</h5>
              </div>
              <table className='project-summary__info'>
                <tbody>
                <tr>
                  <th>Project owner:</th>
                  <td>Mary McCorny</td>
                </tr>
                <tr>
                  <th>Due date:</th>
                  <td>21/12/2018</td>
                </tr>
                <tr>
                  <th>Client Brief:</th>
                  <td><a href=''>Design Brief_Global Co.txt</a></td>
                </tr>
                </tbody>
              </table>
              <p>
                Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for.
                His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he
                unpleasant no inquietude insipidity. Advantages can discretion possession add favourable cultivated
                admiration far. Why rather assure how esteem end hunted nearer and before. By an truth after heard going
                early given he.
              </p>
              <div className='project-summary__stats'>
                <div className='project-summary__stat'>
                  <p>123 <span>Tasks</span></p>
                </div>
                <div className='project-summary__stat'>
                  <p>12 <span>Users</span></p>
                </div>
                <div className='project-summary__stat'>
                  <p>71 <span>Bugs</span></p>
                </div>
                <div className='project-summary__progress progress-wrap progress-wrap--middle'>
                  <Progress value={74}>74% completed</Progress>
                </div>
              </div>
              <hr/>
              <Statistics/>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}