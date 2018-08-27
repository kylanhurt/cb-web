import React, {PureComponent} from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown} from 'reactstrap';
import TopbarNavLink from './TopbarNavLink';

export default class TopbarNavDashboards extends PureComponent {
  render() {
    return (
      <UncontrolledDropdown className='topbar__nav-dropdown'>
        <DropdownToggle className='topbar__nav-dropdown-toggle'>
          Dashboards
          <DownIcon/>
        </DropdownToggle>
        <DropdownMenu className='topbar__nav-dropdown-menu dropdown__menu'>
          <DropdownItem>
            <TopbarNavLink title='Dashboard Default' icon='home' route='/dashboard_default'/>
          </DropdownItem>
          <DropdownItem>
            <TopbarNavLink title='Dashboard E-commerce' icon='store' route='/dashboard_e_commerce'/>
          </DropdownItem>
          <DropdownItem>
            <TopbarNavLink title='Dashboard Fitness' icon='heart-pulse' new route='/dashboard_fitness'/>
          </DropdownItem>
          <DropdownItem>
            <TopbarNavLink title='Dashboard Crypto' icon='rocket' new route='/dashboard_crypto'/>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}
