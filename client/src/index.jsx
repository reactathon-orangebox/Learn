import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Profile from './components/profile_page/profile.jsx';
import Room from './components/classroom/Room.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPg: 'profile'
    }
  }

  switchViews() {
    var currentPg = this.state.currentPg;

    if (currentPg = 'profile') {
      return <Profile />
    } else if (currentPg === 'room') {
      return <Room />
    }
  }

  render () {
    return (
      <div>
        { this.switchViews() }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));