import React, { Component } from 'react'
import {Container,Card,Row,Button} from "react-bootstrap"
import "../Login/Login.css";
const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};
export default class login extends Component {
    constructor(props) {
        super();
    
        this.state = { ...INITIAL_STATE };
      }

    onSubmit = event => {
        const { email, password } = this.state;
         if(email === '')
         alert('enter emailid');
        if(password === '')
        alert('enter password');
    
    
    } ;
    
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    
    };

    render() {
        const {
            email,
            password,
            error,
          } = this.state;
      
        return (
            <div>
                
                <Container>
                    <Card classname="card" >
                        <br/>
                        <br/>
                        <h3> User Login </h3>
                        <Row>
                        <label>Usrname</label><br/>
                        <input type="text"/>
                        </Row>
                        <Row>
                        <label>Password</label>
                        <br/>
                        <input type="text"/>
                        </Row>
                        <Row>
                        <Button  type="submit" href="Home">Submit</Button>
                         
                           
                        
                        </Row>
                        <br/><br/>
                    </Card>
                </Container>
            </div>
        )
    }
}
