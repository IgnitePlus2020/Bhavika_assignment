  
import React, { Component } from "react";
import * as ReactBootStrap from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

class Navbar extends Component{

render()
{return (
        <div>
        
        <ReactBootStrap.Navbar bg="dark" variant="dark" expand="lg">
      <ReactBootStrap.Navbar.Brand href="#home">React Shop</ReactBootStrap.Navbar.Brand>
      </ReactBootStrap.Navbar>
      
      <ReactBootStrap.Navbar bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto" variant="pills" pill variant="light" defaultActiveKey="#home">
      <ReactBootStrap.Nav.Link  href="#home">Home</ReactBootStrap.Nav.Link>

      <ReactBootStrap.NavDropdown  title="Clothing" pill variant="info" id="basic-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="https://www.netflix.com/browse">Women's</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/1.2">Men's</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>


      <ReactBootStrap.NavDropdown  title="Electronics" id="basic-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/2.1">Phone</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/2.2">Laptop</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      
  
     
   
      
      <ReactBootStrap.NavDropdown  title="Books" id="basic-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="/">Fiction</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="/self-help">Self-Help</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      <Form inline>
      <FormControl type="text" placeholder=" " className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
      
    </Form>

    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar> 
<Carousel>
  <Carousel.Item>
    <img
      className="front"
      src="/images/front1.png" fluid
      alt=""
    />
    <Carousel.Caption>
      <h3>Welcome</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="front"
      src="/images/front2.png"
      alt=""
      
    />
  </Carousel.Item>
  </Carousel>
  
</div>

);
}
}
export default Navbar;