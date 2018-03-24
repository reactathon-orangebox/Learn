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

          <form className="max-2 my-auto d-inline w-100">

            <div className="input-group">

              <input type="text" className="form-control border border-right-0" placeholder="Try Yoga and Flowers...."/>

              <span className="input-group-append">
               <button className="btn btn-outline-secondary border border-left-0" type="button">
                 <i className="fa fa-search"></i>
               </button>

                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <a className="nav-link navBarUserMargin" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-user fa-lg"></i>
                      </a>

                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                          <a className="dropdown-item" href="#">Sign In</a>
                          <a className="dropdown-item" href="#">Log In</a>
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

// <nav class="navbar navbar-expand-md navbar-light bg-faded shadowBorder">
//     <a href="#" class="navbar-brand brandMargin"><img class="brandResize" src="http://www.eatlogos.com/food_and_drinks/png/vector_food_orange_logo.png"></a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar5">
//         <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="navbar-collapse collapse" id="navbar5">
        
//         <ul class="navbar-nav">
            
//         </ul>
        
//         <form class="mx-2 my-auto d-inline w-100">
//             <div class="input-group">
//                 <input type="text" class="form-control border border-right-0" placeholder="Try Yoga and Flowers....">
//                 <span class="input-group-append">
                    
//                 <button class="btn btn-outline-secondary border border-left-0" type="button">
//                     <i class="fa fa-search"></i>
//                 </button>
                
                   // <ul class="navbar-nav">
                   //    <li class="nav-item dropdown">
                   //        <a class="nav-link navBarUserMargin" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   //            <i class="fa fa-user fa-lg"></i>
                   //        </a>
                   //    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                   //        <a class="dropdown-item" href="#">Sign In</a>
                   //        <a class="dropdown-item" href="#">Log In</a>
                   //    </div>  
                   //    </li>
                   // </ul>
//               </span>
//             </div>
//         </form>
//     </div>
// </nav>