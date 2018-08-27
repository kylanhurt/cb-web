import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import Collapse from '../../../../components/Collapse';

export default class MinimalCollapse extends PureComponent {
  render() {
    return (
      <Col xs={12} md={12} lg={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Minimal collapse</h5>
              <h5 className='subhead'>Use default collapse</h5>
            </div>
            <Collapse title='What is the most featured item?'>
              <p>No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize
                her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy
                warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use
                these smart rooms ham. No waiting in on enjoyed placing it inquiry. In no impression assistance
                contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection
                we. Few extensive add delighted tolerably sincerity her. Law ought him least enjoy decay one quick
                court. Expect warmly its tended garden him esteem had remove off. Effects dearest staying now
                sixteen nor improve.</p>
            </Collapse>
            <Collapse title='Other information'>
              <p>No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize
                her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy
                warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use
                these smart rooms ham. No waiting in on enjoyed placing it inquiry. In no impression assistance
                contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection
                we. Few extensive add delighted tolerably sincerity her. Law ought him least enjoy decay one quick
                court. Expect warmly its tended garden him esteem had remove off. Effects dearest staying now
                sixteen nor improve.</p>
            </Collapse>
            <Collapse title='Last group'>
              <p>No comfort do written conduct at prevent manners on. Celebrated contrasted discretion him sympathize
                her collecting occasional. Do answered bachelor occasion in of offended no concerns. Supply worthy
                warmth branch of no ye. Voice tried known to as my to. Though wished merits or be. Alone visit use
                these smart rooms ham. No waiting in on enjoyed placing it inquiry. In no impression assistance
                contrasted. Manners she wishing justice hastily new anxious. At discovery discourse departure objection
                we. Few extensive add delighted tolerably sincerity her. Law ought him least enjoy decay one quick
                court. Expect warmly its tended garden him esteem had remove off. Effects dearest staying now
                sixteen nor improve.</p>
            </Collapse>
          </CardBody>
        </Card>
      </Col>
    )
  }
}