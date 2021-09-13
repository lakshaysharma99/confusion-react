import React, { Component } from 'react';
import Menu from './MenuComponent'; 
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component{

  //constructor is defined as we need a constructor to define the state
  constructor(props){
    //super is required
    super(props);

    this.state = {
      dishes : DISHES,
      selectedDish : null
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish : dishId});
}

  render(){
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} 
            onClick={(dishId) => this.onDishSelect(dishId)} />
            {/* the filter fuction returns a subarray so we need to use [0] here
                obviously only one dish will be selected but the filter function returns
                it in the form of a subarray*/}
        <DishDetail 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            <Footer />
      </div>
    );
  }
}

export default Main;
