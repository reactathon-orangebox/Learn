import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Profile from './components/profile_page/profile.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPg: 'profile'
    }
  }

  switchViews(current) {
    if (current === 'profile') {
      return (
          <div >
            <Profile />
          </div>
      )
    }
  }

  render () {
    return (
      <div>
        {
          this.switchViews(this.state.currentPg)
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));