import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navbar from './components/navbar/Navbar.jsx';
import Profile from './components/profile_page/profile.jsx';
import Room from './components/classroom/Room.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPg: 'room'
    }
  }

  switchViews() {
    var currentPg = this.state.currentPg;

    console.log(currentPg);

    if (currentPg === 'profile') {
      return <Profile />;
    } else if (currentPg === 'room') {
      return <Room />;
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