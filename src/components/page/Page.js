import React, { Component } from 'react';
import Sidebar from '../sidebar/Sidebar';
import Settings from '../settingsBox/Settings';
import './page.css';
class Page extends Component {
  render() {
    return (
      <div className='page'>
        <Sidebar />
        <Settings />
      </div>
    );
  }
}

export default Page;
