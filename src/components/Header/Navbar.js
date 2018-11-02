import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import {connect} from "react-redux";

import * as actionCreators from "../../actions/index";

import "./Navbar.css"


const mapStatetoProps = (state) => {
    return state;
  }

const LoggedOutView = props => {
    return (
      <Nav pullRight>
      <NavItem eventKey={1} componentClass={Link} to="/" href="/">
          Feed
      </NavItem>
      <NavItem eventKey={2} componentClass={Link} to="/signin" href="/signin">
          Login
      </NavItem>
    </Nav>
    );
};

const LoggedInView = props => {
    return (
      <Nav pullRight > 
      <NavItem eventKey={3} componentClass={Link} to="/new/article" href="/new/article">
          New
      </NavItem>
      <NavItem eventKey={4} componentClass={Link} to="/logout" href="/logout">
          Logout
      </NavItem>
    </Nav>
    );
};

class NavBar extends React.Component {
  render() {
    let whichMenu = <LoggedOutView/>
    if(this.props.currentuser){
      whichMenu = <LoggedInView/>
    }else{
      whichMenu = <LoggedOutView/>
    }
      return(
        <Navbar collapseOnSelect className = "customNavBar">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Florian Bonniec</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {whichMenu}
            </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
  }
}

//export default NavBar;
export default connect(mapStatetoProps,actionCreators)(NavBar);