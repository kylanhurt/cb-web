import React, {PureComponent} from 'react';
import {Card, CardBody} from 'reactstrap';

export default class InstallationSteps extends PureComponent {
  render() {
    return (
      <Card className='card--not-full-height'>
        <CardBody>
          <div className='card__title'>
            <h5 className='bold-text'>Installation</h5>
          </div>
          <p>EasyDEV is based on create-react-app and has its README.md which you can find very useful.</p>
          <p>To get started follow this steps:</p>
          <ol>
            <li>Install <a href='https://nodejs.org/en/'>Node</a> and npm.</li>
            <li>Download and open project.</li>
            <li>Install packages: <b>npm i</b> or <b>npm install</b>.</li>
            <li>Start project locally: <b>npm start</b> (running on port 3000).</li>
            <li>Make necessary changes.</li>
            <li>Build app for production: <b>npm run build</b>.</li>
          </ol>
        </CardBody>
      </Card>
    )
  }
}