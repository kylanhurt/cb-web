import React, {PureComponent} from 'react';
import {PieChart, Pie, Tooltip, Legend} from 'recharts';
import {Button} from 'reactstrap';
import LoadingIcon from 'mdi-react/LoadingIcon';

const data01 = [{name: 'New Tasks', value: 40, fill: '#4ce1b6'},
  {name: 'Done Tasks', value: 175, fill: '#70bbfd'},
  {name: 'High Priority Task', value: 70, fill: '#ff4861'}];

const data01_2 = [{name: 'New Tasks', value: 95, fill: '#4ce1b6'},
  {name: 'Done Tasks', value: 118, fill: '#70bbfd'},
  {name: 'High Priority Task', value: 59, fill: '#ff4861'}];

const data02 = [{name: 'Minor Bugs', value: 150, fill: '#4ce1b6'},
  {name: 'Resolved Bugs', value: 75, fill: '#70bbfd'},
  {name: 'Critical Bugs', value: 75, fill: '#ff4861'}];

const data02_2 = [{name: 'Minor Bugs', value: 62, fill: '#4ce1b6'},
  {name: 'Resolved Bugs', value: 115, fill: '#70bbfd'},
  {name: 'Critical Bugs', value: 65, fill: '#ff4861'}];

const style = {
  top: 30,
  left: 240,
  width: 150,
  lineHeight: '24px'
};

export default class Statistics extends PureComponent {
  constructor(props) {
    super(props);
    
    this.state = {
      update: false,
      data1: data01,
      data2: data02
    };
    
    this.onUpdate = this.onUpdate.bind(this);
  }
  
  onUpdate() {
    this.setState({update: true});
    // your async logic here
    const data1 = this.state.data1 === data01 ? data01_2 : data01;
    const data2 = this.state.data2 === data02 ? data02_2 : data02;
    setTimeout(() => this.setState({update: false, data1, data2}), 2000);
  }
  
  render() {
    return (
      <div className='project-summary__statistics'>
        {this.state.update ? <div className='project-summary__statistics-refresh'><LoadingIcon/></div> : ''}
        <Button className='project-summary__btn' outline size='sm' onClick={this.onUpdate}>Update Data</Button>
        <div className='project-summary__statistic'>
          <p className='project-summary__statistic-title'>Task Statistic</p>
          <PieChart width={240} height={220}>
            <Tooltip/>
            <Pie data={this.state.data1} dataKey='value' cx={110} cy={110} innerRadius={60} outerRadius={80} label/>
            <Legend layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
          </PieChart>
        </div>
        <div className='project-summary__statistic'>
          <p className='project-summary__statistic-title'>Bug Statistic</p>
          <PieChart width={240} height={250}>
            <Tooltip/>
            <Pie data={this.state.data2} dataKey='value' cx={110} cy={110} innerRadius={60} outerRadius={80} label/>
            <Legend layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
          </PieChart>
        </div>
      </div>
    )
  }
}