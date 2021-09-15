import React, { Component } from 'react';
// import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
// import { DISHES } from './shared/dishes';
import { BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
