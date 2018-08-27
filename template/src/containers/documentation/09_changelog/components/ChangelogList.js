import React, {PureComponent} from 'react';
import {Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class ResourcesLinks extends PureComponent {
  render() {
    return (
      <Card className='card--not-full-height'>
        <CardBody className='documentation__changelog'>
          <div className='card__title'>
            <h5 className='bold-text'>v1.3.2</h5>
            <h5 className='subhead'>03-August-2018</h5>
          </div>
          <ul>
            <li>Redesigned Chat</li>
            <li>Reworked notifications</li>
            <li>Added welcome notifications</li>
          </ul>
          <div className='card__title'>
            <h5 className='bold-text'>v1.3.1</h5>
            <h5 className='subhead'>20-July-2018</h5>
          </div>
          <ul>
            <li>Updated Material-UI to v1.4.0</li>
            <li>Updated versions of other packages</li>
            <li>Added new page: <Link to='/account/email_confirmation'>Email Confirmation</Link></li>
            <li>Added lists of messages and notifications to topbar</li>
            <li>Changed next components: TopbarProfile, Modal</li>
            <li>Renamed folder 'pages' to 'containers'</li>
            <li>Minor bug and style fixes</li>
          </ul>
          <div className='card__title'>
            <h5 className='bold-text'>v1.3.0</h5>
            <h5 className='subhead'>5-July-2018</h5>
          </div>
          <ul>
            <li>Added seed project</li>
            <li>Minor fixes</li>
          </ul>
          <div className='card__title'>
            <h5 className='bold-text'>v1.2.1</h5>
            <h5 className='subhead'>25-June-2018</h5>
          </div>
          <ul>
            <li>Included landing page in main files</li>
          </ul>
          <div className='card__title'>
            <h5 className='bold-text'>v1.2.0</h5>
            <h5 className='subhead'>20-June-2018</h5>
          </div>
          <ul>
            <li>Changed the Timepicker from react-times to rc-time-picker</li>
            <li>The warning related with src/app/Router.js was fixed</li>
            <li>Changed the structure of custom fields in src/components/form</li>
            <li>Made the theme customizer</li>
            <li>Excluded the topbar and sidebar to a separated folder  (/src/pages/_layout)</li>
            <li>Top-menu was added</li>
          </ul>
          <div className='card__title'>
            <h5 className='bold-text'>v1.1.1</h5>
            <h5 className='subhead'>06-June-2018</h5>
          </div>
          <ul>
            <li>Separated the sidebar logic on mobile and desktop</li>
            <li>Minor bugs fixes</li>
          </ul>
          <div className='card__title'>
            <h5 className='bold-text'>v1.1.0</h5>
            <h5 className='subhead'>02-June-2018</h5>
          </div>
          <ul>
            <li>Editable tables added</li>
            <li>Minor bugs fixes</li>
          </ul>
          <div className='card__title'>
            <h5 className='bold-text'>v1.0.0</h5>
            <h5 className='subhead'>31-May-2018</h5>
          </div>
          <ul>
            <li>Initial Release</li>
          </ul>
        </CardBody>
      </Card>
    )
  }
}