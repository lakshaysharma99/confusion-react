import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component{

  //constructor is defined as we need a constructor to define the state
  constructor(props){
    //super is required
    super(props);

    this.state = {
      dishes : DISHES
    };
  }

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        {/* dishes is now made available as props */}
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
