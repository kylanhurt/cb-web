import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import {changeThemeToDark, changeThemeToLight} from '../../../redux/actions/themeActions';
import { makeEdgeUiContext } from 'edge-login-ui-web'
import { updateAccount, destroyAccount } from '../../../redux/actions/accountActions.js'

let edgeContext // : EdgeUiContext 

makeEdgeUiContext({
  apiKey: "aac3421135575c7433551969b28f72c5b74d7b78",
  appId: 'com.kylan.whatever',
  appName: 'CaptainsRelay'
}).then(async context => {
  edgeContext = context
  console.log('context is: ', context)
})

class SidebarContent extends PureComponent {
  changeToDark = () => {
    this.props.dispatch(changeThemeToDark());
    this.hideSidebar();
  };
  
  changeToLight = () => {
    this.props.dispatch(changeThemeToLight());
    this.hideSidebar();
  };
  
  openLogin = () => {
    const { updateAccount } = this.props
    if (edgeContext)
    edgeContext.openLoginWindow({
      onLogin(account) {
        console.log('account is: ', account)        
        updateAccount(account)
      },
      onClose() {
        console.log('Closing window')
      } 
    })
  };
  
  render() {
    const { account, destroyAccount } = this.props
    const accountOptionSyntax = account ? 'Log Out' : 'Log In'
    const onPressAccount = account ? destroyAccount : this.openLogin
    return (
      <div className='sidebar__content'>
        <ul className='sidebar__block'>
          <SidebarLink title={accountOptionSyntax} icon='exit' onClick={onPressAccount}/>
          <SidebarCategory title='Layout' icon='layers'>
            <li className='sidebar__link' onClick={this.changeToLight}>
              <p className='sidebar__link-title'>Light Theme</p>
            </li>
            <li className='sidebar__link' onClick={this.changeToDark}>
              <p className='sidebar__link-title'>Dark Theme</p>
            </li>
          </SidebarCategory>
        </ul>
        <ul className='sidebar__block'>
          <SidebarCategory title='Example Pages' icon='diamond'>
            <SidebarLink title='Page one' route='/pages/one' onClick={this.hideSidebar}/>
            <SidebarLink title='Page two' route='/pages/two' onClick={this.hideSidebar}/>
          </SidebarCategory>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  account: state.account
})

const mapDispatchToProps = (dispatch) => ({
  updateAccount: (account: any) => dispatch(updateAccount(account)),
  destroyAccount: () => dispatch(destroyAccount())
})

export const SidebarContentConnector = connect(mapStateToProps, mapDispatchToProps)(SidebarContent);