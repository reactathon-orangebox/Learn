import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
        <div >
          <header>
            <Navbar  />
          </header>
          <div>
            Hello World!
          </div>

        </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));