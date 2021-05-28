import React, { Component } from 'react';

import { FaPlusSquare,FaMinusSquare } from 'react-icons/fa';
import {Container,Card,Row,Col} from "react-bootstrap";
import "../Home/Home.css";

 class Home extends Component{

    render(){
          return(
                <Container className="container1" >
                    
                         <h1>Fruit Cart</h1>
<Row >

<Card className="card1">

     
                       
                        <img src="/img/o1.jpg " alt="Orange"  className="form-img"/>
                             <span className="card-title">Oranges</span>
                             < FaPlusSquare size="3em" />< FaMinusSquare size="3em" />
                      
                        
                        </Card>
                        <Card>
                        
                        
                        <img src="/img/app.jpg" alt="Orange"  className="form-img"/>
                             <span className="card-title">Apples</span>
                             < FaPlusSquare size="3em" />< FaMinusSquare size="3em" />
                      
                       
                        </Card>
                        <Card>
                        
                       
                        <img src="/img/mang.jpg" alt="Orange"  className="form-img"/>
                             <span className="card-title">Mango</span>
                             < FaPlusSquare size="3em" />< FaMinusSquare size="3em" />
                       
                        
                        </Card>
                        
</Row>
                        

                      
                        </Container>
              )
       
        
    }
}


export default Home;