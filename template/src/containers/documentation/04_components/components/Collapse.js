import React, {PureComponent} from 'react';
import CodeHighlither from '../../../../components/CodeHighlither';
import {Card, CardBody} from 'reactstrap';
import Table from '../../../../components/table/Table';

export default class Collapse extends PureComponent {
  render() {
    return (
      <Card className='card--not-full-height'>
        <CardBody>
          <div className='card__title'>
            <h5 className='bold-text'>Collapse</h5>
          </div>
          <p>Collapse is based on <a href='https://reactstrap.github.io/components/collapse/'>reactstrap</a>. Example of
            using this component here:</p>
          <CodeHighlither>
            {`import React, {PureComponent} from 'react';
import Collapse from 'template/src/components/Collapse';

export default class Example extends PureComponent {
  render() {
    return (
      <Collapse title='What is the most featured item?' className='boxed'>
        <p>No comfort written conduct at prevent manners on.</p>
      </Collapse>
    )
  }
}`}
          </CodeHighlither>
          <p>Props of Collapse:</p>
          <Table responsive className='table--bordered table--head-accent'>
            <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>title</td>
              <td>string</td>
              <td></td>
            </tr>
            <tr>
              <td>className</td>
              <td>string</td>
              <td>You can change basic style: <span className='red-text'>'boxed'</span>, <span
                className='red-text'>'boxed colored'</span>, <span className='red-text'>'faq'</span> and yours
              </td>
            </tr>
            </tbody>
          </Table>
          <p>Stylesheet: <b>template/src/scss/components/collapse.scss</b></p>
        </CardBody>
      </Card>
    )
  }
}