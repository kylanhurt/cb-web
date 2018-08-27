import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis} from 'react-vis';

function getRandomData() {
  return (new Array(100)).fill(0).map(row => ({
    x: Math.random() * 10,
    y: Math.random() * 20,
    size: Math.random() * 10,
    color: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.5
  }));
}

export default class MarkSeriesCanvas extends PureComponent {
  render() {
    return (
      <Col xs={12} md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Mark Series Canvas</h5>
            </div>
            <div className='react-vis'>
              <FlexibleWidthXYPlot
                height={300}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis/>
                <YAxis/>
                <MarkSeries
                  className='mark-series-example'
                  strokeWidth={2}
                  opacity='0.8'
                  sizeRange={[5, 15]}
                  data={getRandomData()}
                  colorRange={['#70bbfd', '#c88ffa']}
                />
              </FlexibleWidthXYPlot>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}