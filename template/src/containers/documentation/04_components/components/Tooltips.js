import React, {PureComponent} from 'react';
import CodeHighlither from '../../../../components/CodeHighlither';
import {Card, CardBody} from 'reactstrap';

export default class Tooltips extends PureComponent {
  render() {
    return (
      <Card className='card--not-full-height'>
        <CardBody>
          <div className='card__title'>
            <h5 className='bold-text'>Tooltips</h5>
          </div>
          <p>Tooltips are based on <a href='https://reactstrap.github.io/components/tooltips/'>reactstrap</a>. Example of
            using this component here:</p>
          <CodeHighlither>
            {`import React, {PureComponent} from 'react';
import {Button, ButtonToolbar UncontrolledTooltip} from 'reactstrap';

export default class Example extends PureComponent {
  render() {
    return (
      <ButtonToolbar className='btn-toolbar--center'>
        <Button id='TooltipTop' outline>Tooltip on Top</Button>
        <UncontrolledTooltip placement='top' target='TooltipTop'>
          Do you like dragons?
        </UncontrolledTooltip>
      </ButtonToolbar>
    )
  }
}`}
          </CodeHighlither>
          <p>All props <a href='https://reactstrap.github.io/components/tooltips/'>here</a>.</p>
          <p>Stylesheet: <b>template/src/scss/components/tooltip.scss</b></p>
        </CardBody>
      </Card>
    )
  }
}