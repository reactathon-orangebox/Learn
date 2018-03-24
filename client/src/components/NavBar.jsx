import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-static-top navBarClean">         
              <span className="navbar-left">
              <button className="btn btn-outline-danger" 
                      type="button" 
                      >Home</button>
                      {button}
              </span>
        </nav> 
      </div>
    )
  } 
}

export default Navbar;