import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {HorizontalGridLines, LineMarkSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis} from 'react-vis';

function getRandomData() {
  return (new Array(500)).fill(0).map((row, i) => ({
    x: i,
    y: Math.random() * 20
  }));
}

export default class LineSeriesCanvas extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: getRandomData()
    };
  }
  
  render() {
    const lineSeriesProps = {
      color: '#70bbfd',
      strokeWidth: 1,
      data: this.state.data
    };
    
    return (
      <Col xs={12} md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Line Series Canvas</h5>
            </div>
            <div className='react-vis'>
              <FlexibleWidthXYPlot
                onMouseLeave={() => this.setState({value: false})}
                height={300}>
                <VerticalGridLines/>
                <HorizontalGridLines/>
                <XAxis/>
                <YAxis/>
                <LineMarkSeries
                  className='react-vis__svg-line'
                  {...lineSeriesProps}/>
              </FlexibleWidthXYPlot>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}