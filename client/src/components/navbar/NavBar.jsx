import React from 'react';
import ReactDOM from 'react-dom';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>

        <nav className="navbar navbar-expand-md navbar-light bg-faded shadowBorder">

          <a href="#" className="navbar-brand brandMargin"><img className="brandResize" src="http://www.eatlogos.com/food_and_drinks/png/vector_food_orange_logo.png"/></a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar5">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse" id="navbar5">
           
            <ul className="navbar-nav">   
                  
            </ul>

          <form className="mx-auto d-inline w-100">

            <div className="input-group">

              <input type="text" className="form-control border border-right-0" placeholder="Search By Professional..."/>

              <span className="input-group-append">
               <button className="btn btn-outline-warning border border-left-0" type="button">
                 <i className="fa fa-search fa-lg"></i>
               </button>

                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link navBarUserMargin" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user fa-lg"></i>
                      </a>

                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                          <a className="dropdown-item" href="#">Profile</a>
                          <a className="dropdown-item" href="#">Sign Out</a>
                      </div>  
                    </li>
                </ul>
              </span>

            </div>

          </form>

          </div>
        </nav>
      </div>
    )
  } 
}

export default Navbar;
