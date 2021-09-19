import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, Errors, LocalForm } from "react-redux-form";

    // componentDidMount(){
    //     console.log('Disdetail Component componentDidMount invoked');
    // }

    // componentDidUpdate() {
    //     console.log('Disdetail Component componentDidUpdate invoked');
    // }
const maxLength = (len) => val => !val || (val.length <= len);
const minLength = (len) => val => (val) && (val.length >= len);

    function RenderDish({dish}){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    }

    function RenderComments({comments, addComment, dishId}) {
        console.log(comments)
        if(comments != null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled"> 
                        {comments.map((comment) => {
                            return(
                                <li key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year:"numeric", month: "short", day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <CommentForm addComment={addComment} dishId={dishId} />
                </div>
        );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        if (props.dish!= null){
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    
                        <RenderDish dish={props.dish} />
                    
                        <RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id} />
                    
                </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

class CommentForm extends Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
       
    }

    render() {
        return(

            <React.Fragment>
                <Button onClick={this.toggleModal} color="primary" className="border" ><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor=".author" md={2}>Your Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".author" id="author" name="author"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                maxLength: maxLength(15), minLength: minLength(3)
                                            }} />
                                        <Errors
                                            className="text-danger" 
                                            model=".author"
                                            show="touched"
                                            messages={{
                                                minLength: "Name chould contain more than 2 characters",
                                                maxLength: "Name chould not contain more than 15 characters"
                                            }} />
                                            
                                        
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="rating" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select model='.rating' name='rating' id="rating"
                                            className="form-control"
                                            placeholder="Rating" >
                                                <option>5</option>
                                                <option>4</option>
                                                <option>3</option>
                                                <option>2</option>
                                                <option>1</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comment" md={2}>Comment</Label>
                                    <Col md={10}>
                                    <Control.textarea model=".comment" name="comment" id="comment" 
                                    className="form-control" rows="6" />
                                    </Col>
                                </Row>
                                <Row className="fprm-group">
                                    <Col md={{size:10, offset:2}}>
                                        <Button type="submit" value="submit" 
                                        color="primary">Comment</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                </Modal>
            </React.Fragment>
        );

    }
}


export default DishDetail;