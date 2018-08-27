import React, {PureComponent} from 'react';
import {Card, CardBody, Col} from 'reactstrap';
import {Bar} from 'react-chartjs-2';

const initialState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 1,
      hoverBackgroundColor: '#FF6384',
      hoverBorderColor: '#FF6384',
      data: [65, 59, 80, 81, 56, 55, 45]
    }
  ]
};

const options = {
  legend: {
    position: 'bottom'
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'rgb(204, 204, 204)',
          borderDash: [3, 3]
        },
        ticks: {
          fontColor: 'rgb(204, 204, 204)'
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          color: 'rgb(204, 204, 204)',
          borderDash: [3, 3]
        },
        ticks: {
          fontColor: 'rgb(204, 204, 204)'
        }
      }
    ]
  }
};

export default class RandomAnimatedBars extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      data: initialState
    };
  }
  
  componentDidMount() {
    const _this = this;
    
    setInterval(function () {
      const oldDataSet = _this.state.data.datasets[0];
      const newData = [];
      
      for (let x = 0; x < _this.state.data.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 100));
      }
      
      const newDataSet = {
        ...oldDataSet
      };
      
      newDataSet.data = newData;
      
      const newState = {
        ...initialState,
        data: {
          datasets: [newDataSet],
          labels: _this.state.data.labels
        }
      };
      
      _this.setState(newState);
    }, 4000);
  }
  
  render() {
    return (
      <Col md={12} lg={12} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Random Animated Bars</h5>
            </div>
            <Bar data={this.state.data} options={options}/>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
