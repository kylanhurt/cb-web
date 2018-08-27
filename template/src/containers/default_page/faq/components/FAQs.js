import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Collapse from '../../../../components/Collapse';

export default class FAQs extends PureComponent {
  render() {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <Collapse className='with-shadow' title='How I can manage my account? '>
              Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes
              really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact
              demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted
              sociable concerns. By in cold no less been sent hard hill.
            </Collapse>
            <Collapse className='with-shadow' title='How much a annual subscribe costs?'>
              Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes
              really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact
              demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted
              sociable concerns. By in cold no less been sent hard hill.
            </Collapse>
            <Collapse className='with-shadow' title='How to modify Admin Template UI?'>
              Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes
              really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact
              demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted
              sociable concerns. By in cold no less been sent hard hill.
            </Collapse>
            <Collapse className='with-shadow' title='How to get support? How often can I get technical consultations?'>
              Breakfast agreeable incommode departure it an. By ignorant at on wondered relation. Enough at tastes
              really so cousin am of. Extensive therefore supported by extremity of contented. Is pursuit compact
              demesne invited elderly be. View him she roof tell her case has sigh. Moreover is possible he admitted
              sociable concerns. By in cold no less been sent hard hill.
            </Collapse>
          </CardBody>
        </Card>
      </Col>
    )
  }
}