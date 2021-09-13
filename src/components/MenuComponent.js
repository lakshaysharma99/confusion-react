import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    
    //more on props in next exercise
    // constructor(props){
    //     //this is required when we require a class component
    //     super(props);
    // }

    

    // renderDish(dish){
    //     if (dish != null){
    //         return(
    //             //DishDetail class is defined under the DishdetailComponent.js file
    //             //in this we pass dish as prop, may be prop mean property, this is passed as an object
    //             //in the DishDetail class all its properties can be accessed in DishDetail
    //             <DishDetail dish={this.state.selectedDish} />
    //         );
    //     } 
    //     else{
    //         return (
    //             <div></div>
    //         );
    //     }
    // }

    //any component should return a render method to return the view for the component 
    render(){

        //using props instead of state because menu is the child of app and menu
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                           
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                        
            </div>
        );
    }
}

//don't forget to export this comp. because we will need this in another file
export default Menu;