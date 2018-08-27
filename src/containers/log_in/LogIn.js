import React, {PureComponent} from 'react';
import LogInForm from './components/LogInForm';
import {Link} from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import { makeEdgeUiContext } from 'edge-login-ui-web'

let edgeContext // : EdgeUiContext 

makeEdgeUiContext({
  apiKey: "aac3421135575c7433551969b28f72c5b74d7b78",
  appId: 'com.kylan.whatever',
  appName: 'CaptainsRelay'
}).then(async context => {
  edgeContext = context
  console.log('context is: ', context)
})

export default class LogIn extends PureComponent {
  constructor (props) {
    super(props)
    this.onClick = () => {
      if (edgeContext)
      edgeContext.openLoginWindow({
        onLogin(account) {
          console.log('account is: ', account)
        },
        onClose() {
          console.log('Closing window')
        } 
      })
    }
  }


  render() {
    return <button onClick={this.onClick}>Log in with Edge</button>
    // return (
    //   <div className='account'>
    //     <div className='account__wrapper'>
    //       <div className='account__card'>
    //         <div className='account__head'>
    //           <h3 className='account__title'>Welcome to <span className='account__logo'>Easy<span
    //             className='account__logo-accent'>DEV</span></span></h3>
    //           <h4 className='account__subhead subhead'>Start your business easily</h4>
    //         </div>
    //         <LogInForm onSubmit/>
    //         <div className='account__or'>
    //           <p>Or Easily Using</p>
    //         </div>
    //         <div className='account__social'>
    //           <Link className='account__social-btn account__social-btn--facebook'
    //                 to='/pages/one'><FacebookIcon/></Link>
    //           <Link className='account__social-btn account__social-btn--google'
    //                 to='/pages/one'><GooglePlusIcon/></Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )
  }
}

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
