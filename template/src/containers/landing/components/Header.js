import React, {PureComponent} from 'react';
import {Col, Row, Container} from 'reactstrap';
import {Link} from 'react-router-dom';

const background = process.env.PUBLIC_URL + '/img/landing/header_bg.png';
const img = process.env.PUBLIC_URL + '/img/landing/macbook.png';

export default class Header extends PureComponent {
  render() {
    return (
      <div className='landing__header' style={{backgroundImage: 'url(' + background + ')'}}>
        <Container>
          <Row>
            <Col md={12}>
              <h2 className='landing__header-title'>The best documented and cleanest coded <b>React Bootstrap
                4</b> Admin Template <br/>+ <b>Seed Project</b> Inside!</h2>
              <p className='landing__header-subhead'>We guarantee you will always get the actual version of the template
                with a bunch of freshest
                updates.</p>
              <Link className='landing__btn landing__btn--header' to='/documentation/introduction' target='_blank'>Check
                out the docs</Link>
              <Link className='landing__btn landing__btn--header' to='/documentation/changelog' target='_blank'>Go to
                the changelog</Link>
              <img className='landing__header-img' src={img} alt='macbook'/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}