import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import ToDo from '../../../../components/ToDo';

export default class MyTodos extends PureComponent {
  render() {
    return (
      <Panel md={12} lg={5} xl={3} xs={12} title='My todos' subhead='Do not forget to do everything'>
        <ToDo id='1' label='Call to Margaret and tell about EasyDEV' checked/>
        <ToDo id='2' label='Prepare docs for boss'/>
        <ToDo id='3' label='Calculate the company budget' checked/>
        <ToDo id='4' label='Find a manager'/>
        <ToDo id='5' label='Call to Sarah'/>
        <ToDo id='6' label='Make a sandwich'/>
        <ToDo id='7' label='Drink a coffee'/>
        <ToDo id='8' label='Walk with my dog'/>
        <ToDo id='9' label='Buy some milk, bread and a new car'/>
      </Panel>
    )
  }
}

