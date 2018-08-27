import React, {PureComponent} from 'react';
import Panel from '../../../../components/Panel';
import {Link} from 'react-router-dom';

const Ava1 = process.env.PUBLIC_URL + '/img/11.png';
const Ava2 = process.env.PUBLIC_URL + '/img/12.png';
const Ava3 = process.env.PUBLIC_URL + '/img/14.png';
const Ava4 = process.env.PUBLIC_URL + '/img/15.png';
const Ava5 = process.env.PUBLIC_URL + '/img/photo_notification.png';
const Ava6 = process.env.PUBLIC_URL + '/img/ava.png';

export default class MyCompetitors extends PureComponent {
  render() {
    return (
      <Panel lg={5} xl={3} md={12} xs={12} title='My Competitors'>
        <Link className='dashboard__competitor' to='/account/profile'>
          <div className='dashboard__competitor-img'>
            <img src={Ava1} alt=''/>
          </div>
          <div className='dashboard__competitor-info'>
            <p className='dashboard__competitor-name'>Peter Jackson</p>
            <p className='dashboard__competitor-result'>12,254 km</p>
          </div>
        </Link>
        <Link className='dashboard__competitor' to='/account/profile'>
          <div className='dashboard__competitor-img'>
            <img src={Ava2} alt=''/>
          </div>
          <div className='dashboard__competitor-info'>
            <p className='dashboard__competitor-name'>Lora Melbourn</p>
            <p className='dashboard__competitor-result'>11,224 km</p>
          </div>
        </Link>
        <Link className='dashboard__competitor' to='/account/profile'>
          <div className='dashboard__competitor-img'>
            <img src={Ava3} alt=''/>
          </div>
          <div className='dashboard__competitor-info'>
            <p className='dashboard__competitor-name'>Cat Mew</p>
            <p className='dashboard__competitor-result'>9,921 km</p>
          </div>
        </Link>
        <Link className='dashboard__competitor' to='/account/profile'>
          <div className='dashboard__competitor-img'>
            <img src={Ava4} alt=''/>
          </div>
          <div className='dashboard__competitor-info'>
            <p className='dashboard__competitor-name'>Liza Orly</p>
            <p className='dashboard__competitor-result'>7,875 km</p>
          </div>
        </Link>
        <Link className='dashboard__competitor' to='/account/profile'>
          <div className='dashboard__competitor-img'>
            <img src={Ava6} alt=''/>
          </div>
          <div className='dashboard__competitor-info'>
            <p className='dashboard__competitor-name'>Michael Bro</p>
            <p className='dashboard__competitor-result'>6,154 km</p>
          </div>
        </Link>
        <Link className='dashboard__competitor' to='/account/profile'>
          <div className='dashboard__competitor-img'>
            <img src={Ava5} alt=''/>
          </div>
          <div className='dashboard__competitor-info'>
            <p className='dashboard__competitor-name'>Charlie Sunset</p>
            <p className='dashboard__competitor-result'>6,154 km</p>
          </div>
        </Link>
      </Panel>
    )
  }
}