import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
// import { DISHES } from './shared/dishes';

class App extends Component{

  //constructor is defined as we need a constructor to define the state
  //COMMENTED OUT AFTER ADDING THE MAIN COMPONENT AS NO LONGER REQD.
  // constructor(props){
  //   //super is required
  //   super(props);

  //   this.state = {
  //     dishes : DISHES
  //   };
  // }

  render(){
    return (
      <div>
        {/* NAVBAR HAS BEEN MOVE TO THE MainComponent SO NO LONGER REQD HERE */}
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar> */}
        {/* dishes is now made available as props */}
        <Main />
      </div>
    );
  }
}

export default App;
