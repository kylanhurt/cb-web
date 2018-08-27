import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {BarChart, Bar, Cell, ResponsiveContainer} from 'recharts';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';

const data = [
  {name: 'Page A', amt: 2400},
  {name: 'Page B', amt: 2210},
  {name: 'Page C', amt: 2290},
  {name: 'Page D', amt: 2000},
  {name: 'Page E', amt: 2181},
  {name: 'Page F', amt: 2500},
  {name: 'Page G', amt: 2100},
  {name: 'Page H', amt: 2290},
  {name: 'Page I', amt: 2000},
  {name: 'Page J', amt: 2181},
];

export default class TotalProfit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      activeIndex: 0
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(data, index) {
    this.setState({
      activeIndex: index,
    });
  }
  
  render() {
    const {activeIndex, data} = this.state;
    const activeItem = data[activeIndex];
    
    return (
      <Col md={12} xl={3} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Total profit</h5>
            </div>
            <div className='dashboard__total'>
              <TrendingUpIcon className='dashboard__trend-icon'/>
              <p className='dashboard__total-stat'>
                ${(activeItem.amt).toFixed(2)}
              </p>
              <ResponsiveContainer height={50} className='dashboard__chart-container'>
                <BarChart data={data}>
                  <Bar dataKey='amt' onClick={this.handleClick}>
                    {
                      data.map((entry, index) => (
                        <Cell cursor='pointer' fill={index === activeIndex ? '#4ce1b6' : '#70bbfd'}
                              key={`cell-${index}`}/>
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

