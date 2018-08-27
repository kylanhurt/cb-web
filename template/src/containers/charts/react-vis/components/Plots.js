import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  LineSeries,
  VerticalRectSeries,
  XAxis,
  YAxis
} from 'react-vis';

function getRandomSeriesData(total) {
  const result = [];
  let lastY = Math.random() * 40;
  let y;
  const firstY = lastY;
  for (let i = 0; i < Math.max(total, 3); i++) {
    y = Math.random() * firstY - firstY / 2 + lastY;
    result.push({
      left: i,
      top: y
    });
    lastY = y;
  }
  return result;
}

export default class Plots extends PureComponent {
  constructor(props) {
    super(props);
    const totalValues = 30;
    this.state = {
      crosshairValues: [],
      series: [
        {
          title: 'Apples',
          disabled: false,
          data: getRandomSeriesData(totalValues)
        },
        {
          title: 'Bananas',
          disabled: false,
          data: getRandomSeriesData(totalValues)
        }
      ]
    };
  }
  
  render() {
    const {series} = this.state;
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Plots</h5>
            </div>
            <div className='react-vis'>
              <FlexibleWidthXYPlot
                animation
                getX={d => d.left}
                getY={d => d.top}
                xDomain={[0, series[0].data.length - 1]}
                height={300}>
                <HorizontalGridLines/>
                <YAxis
                  className='cool-custom-name'
                  tickSizeInner={0}
                  tickSizeOuter={8}
                />
                <XAxis
                  className='even-cooler-custom-name'
                  tickSizeInner={0}
                  tickSizeOuter={8}
                />
                <VerticalRectSeries
                  data={series[0].data.map(({left, top}) => ({x0: left - 0.5, left: left + 0.5, top}))}
                  stroke='white'
                  onNearestX={this._nearestXHandler}
                  {...(series[0].disabled ? {opacity: 0.2} : null)}
                  color='#70bbfd'
                />
                <LineSeries
                  className='react-vis__svg-line'
                  data={series[1].data}
                  curve='curveMonotoneX'
                  {...(series[1].disabled ? {opacity: 0.2} : null)}
                  color='#f6da6e'
                />
              </FlexibleWidthXYPlot>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}