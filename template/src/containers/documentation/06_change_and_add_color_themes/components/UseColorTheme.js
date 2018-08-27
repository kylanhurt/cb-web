import React, {PureComponent} from 'react';
import {Card, CardBody} from 'reactstrap';
import CodeHighlither from '../../../../components/CodeHighlither';

export default class UseColorTheme extends PureComponent {
  render() {
    return (
      <Card className='card--not-full-height'>
        <CardBody>
          <div className='card__title'>
            <h5 className='bold-text'>Use Color Theme</h5>
          </div>
          <p>This is an example of using themes' variables in stylesheets:</p>
          <CodeHighlither scss>
            {`body {

  @include themify($themes) {
    color: themed('colorText');
  }
}`}
          </CodeHighlither>
        </CardBody>
      </Card>
    )
  }
}