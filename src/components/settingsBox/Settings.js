import React, { Component } from 'react';
import './settings.css';
class Settings extends Component {
  state = {
    toggleAlert: false,
    toggleSuccess: false
  };

  onSave = e => {
    e.preventDefault();
    if (e.target.id === 'btnSubmit') {
      this.checkFields();
    }
  };
  checkFields = () => {
    if (
      this.firstName.value === '' ||
      this.lastName.value === '' ||
      this.dob.value === '' ||
      this.mail.value === '' ||
      this.phone.value === '' ||
      this.userName.value === '' ||
      this.password.value === ''
    ) {
      this.setState({
        toggleAlert: true
      });
      setTimeout(() => {
        this.setState({
          toggleAlert: false
        });
      }, 4000);
    } else {
      this.firstName.value = '';
      this.lastName.value = '';
      this.dob.value = '';
      this.mail.value = '';
      this.phone.value = '';
      this.userName.value = '';
      this.password.value = '';
      this.setState({
        toggleSuccess: true
      });
      setTimeout(() => {
        this.setState({
          toggleSuccess: false
        });
      }, 4000);
    }
  };

  onKeyUp = (target, e) => {
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName':
          this.lastName.focus();
          break;
        case 'lastName':
          this.dob.focus();
          break;
        case 'dob':
          this.mail.focus();
          break;
        case 'mail':
          this.phone.focus();
          break;
        case 'phone':
          this.userName.focus();
          break;
        case 'userName':
          this.password.focus();
          break;
        case 'password':
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  };

  render() {
    let alertClass;
    let alertSuccess;
    if (this.state.toggleAlert) {
      alertClass = 'showDanger ';
    } else {
      alertClass = 'alert';
    }
    if (this.state.toggleSuccess) {
      alertSuccess = 'showSuccess ';
    } else {
      alertSuccess = 'alert';
    }

    return (
      <div className='settings'>
        <h2>Settings</h2>
        <form className='form'>
          <div className='personal-info form-box'>
            <h3>Personal information</h3>
            <div className='form-group form-group-personal'>
              <div className='firstName form-group-sub'>
                <label htmlFor='firstname'>First name</label>
                <input
                  onKeyUp={this.onKeyUp.bind(this, 'firstName')}
                  ref={input => {
                    this.firstName = input;
                  }}
                  placeholder='Kendrick'
                  type='text'
                  id='firstname'
                />
              </div>
              <div className='lastName form-group-sub'>
                <label htmlFor='lastname'>Last name</label>
                <input
                  onKeyUp={this.onKeyUp.bind(this, 'lastName')}
                  ref={input => {
                    this.lastName = input;
                  }}
                  placeholder='Lamar'
                  type='text'
                  id='lastname'
                />
              </div>
              <div className='DOB form-group-sub'>
                <label htmlFor='dob'>Date of birth</label>
                <input
                  onKeyUp={this.onKeyUp.bind(this, 'dob')}
                  ref={input => {
                    this.dob = input;
                  }}
                  type='date'
                  id='dob'
                />
              </div>
            </div>
          </div>
          <div className='contact-info form-box'>
            <h3>Contact details</h3>
            <div className='form-group'>
              <div className='email form-group-sub'>
                <label htmlFor='mail'>Email</label>
                <input
                  onKeyUp={this.onKeyUp.bind(this, 'mail')}
                  ref={input => {
                    this.mail = input;
                  }}
                  placeholder='kendrick@acid.com'
                  type='email'
                  id='mail'
                />
              </div>
              <div className='phone form-group-sub'>
                <label htmlFor='phoneNo'>Phone no.</label>
                <input
                  onKeyUp={this.onKeyUp.bind(this, 'phone')}
                  ref={input => {
                    this.phone = input;
                  }}
                  type='number'
                  placeholder='+91 987123098'
                  id='phoneNo'
                />
              </div>
            </div>
          </div>
          <div className='account-info form-box'>
            <h3>Account settings</h3>
            <div className='form-group'>
              <div className='userDetail form-group-sub'>
                <label htmlFor='userName'>Username</label>
                <input
                  onKeyUp={this.onKeyUp.bind(this, 'userName')}
                  ref={input => {
                    this.userName = input;
                  }}
                  placeholder='ken'
                  type='text'
                  id='userName'
                />
              </div>
              <div className='pass form-group-sub'>
                <label htmlFor='password'>Password</label>
                <input
                  onKeyUp={this.onKeyUp.bind(this, 'password')}
                  ref={input => {
                    this.password = input;
                  }}
                  placeholder='Type in your password'
                  type='password'
                  id='password'
                />
                <p>Update password</p>
              </div>
            </div>
          </div>
          <div className='btn'>
            {/* <button
              ref={input => {
                this.save = input;
              }}
            >
              SAVE SETTINGS
            </button> */}
            <a
              href='/'
              id='btnSubmit'
              type='submit'
              ref={input => {
                this.submit = input;
              }}
              onClick={this.onSave}
            >
              Save Settings
            </a>
          </div>
          <div className={alertClass}>Please enter all fields</div>

          <div className={alertSuccess}>Your settings has been updated</div>
        </form>
      </div>
    );
  }
}

export default Settings;
