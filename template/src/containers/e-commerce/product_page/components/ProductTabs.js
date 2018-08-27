import React, {PureComponent} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

export default class ProductTabs extends PureComponent {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  render() {
    return (
      <div className='tabs'>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '1'})}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Description
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '2'})}
              onClick={() => {
                this.toggle('2');
              }}
            >
              Delivery
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({active: this.state.activeTab === '3'})}
              onClick={() => {
                this.toggle('3');
              }}
            >
              Refounds
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId='1'>
            <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
              use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article
              concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you
              numerous securing. Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way
              unaffected expression for. </p>
            <p>His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as
              oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable
              cultivated admiration far. </p>
          </TabPane>
          <TabPane tabId='2'>
            <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
              use tolerably dependent listening men. No peculiar in handsome together unlocked do by.</p>
          </TabPane>
          <TabPane tabId='3'>
            <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
              use tolerably dependent listening men. No peculiar in handsome together unlocked do by.</p>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}