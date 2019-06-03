import React from 'react';
import userImg from './alina-kovalchuk-1143928-unsplash.jpg';
import './sidebar.css';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-inner'>
        <div className='sidebar-logo'>
          <h1>ACID</h1>
        </div>
        <div className='sidebar-user'>
          <div className='sidebar-user-image'>
            <img src={userImg} alt='' />
          </div>
          <div className='sidebar-user-name'>LOGAN</div>
        </div>
        {/* mobile */}
        <div className='setting-panel'>
          <div className='sidebar-list-icon'>
            <i className='fas fa-cog' />
          </div>
          <div className='sidebar-list-type'>
            <p>SETTINGS</p>
          </div>
        </div>
        {/* mobile end */}
        <div className='sidebar-list'>
          <ul>
            <li>
              <div className='sidebar-list-icon'>
                <i className='fas fa-desktop' />
              </div>
              <div className='sidebar-list-type'>
                <p>OVERVIEW</p>
              </div>
            </li>
            <li>
              <div className='sidebar-list-icon'>
                <i className='fas fa-search' />
              </div>
              <div className='sidebar-list-type'>
                <p>DISCOVER</p>
              </div>
            </li>
            <li>
              <div className='sidebar-list-icon'>
                <i className='fas fa-exchange-alt' />
              </div>
              <div className='sidebar-list-type'>
                <p>EXCHANGE</p>
              </div>
            </li>
            <li>
              <div className='sidebar-list-icon'>
                <i className='far fa-credit-card' />
              </div>
              <div className='sidebar-list-type'>
                <p>SEND & RECIEVE</p>
              </div>
            </li>
            <li>
              <div className='sidebar-list-icon'>
                <i className='fas fa-cog' />
              </div>
              <div className='sidebar-list-type'>
                <p>SETTINGS</p>
              </div>
            </li>
            <li>
              <div className='sidebar-list-icon'>
                {' '}
                <i className='fas fa-sign-out-alt' />
              </div>
              <div className='sidebar-list-type'>
                <p>SIGNOUT</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
