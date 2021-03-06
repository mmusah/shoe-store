import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { HashRouter as Router } from 'react-router-dom';


import {connect} from 'react-redux'
import {userLogout} from '../Redux/action'

class Navbar extends Component {
state = {
  isOpen: false
};

handleSearchChange=(e)=>{
  this.props.history.push('./home')
  this.props.shoes.map(shoe=>{
    console.log(shoe)
  })
}

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text"><img style={{height:"30px"}} src="https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/trello-header-logos/1c3a2d636e34d62a6cb27d83e5e6956b/trello-logo-black.svg" alt="logo"/></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/home">Home</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/admin">Admin</MDBNavLink>
            </MDBNavItem>
          
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <form className="md-form my-0">
                  <input onChange={this.handleSearchChange} className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </form>
              </MDBFormInline>
            </MDBNavItem>

            <button onClick={()=>{
              localStorage.clear()
            this.props.userLogout()
            }}>logout</button>
            
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}



const mapStateToProps=(state)=>{
  return {
      // user:state.user,
      shoes:state.shoes

  }
}

const mapDispatchToProps = {
  userLogout:userLogout,
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)