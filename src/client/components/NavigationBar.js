import * as React from 'react';
import '../../style/css/Font.css';
 import Splashpage from './Splashpage';
import "../../style/css/splashpage.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';





export default class NavigationBar extends React.Component
{
	 constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

        <Navbar  color="faded" light expand="md">
          <NavbarBrand href="/"><Splashpage/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="www.google.com" id = "navbarLinks">Resume</NavLink>
              </NavItem>
              <NavItem>
              <NavLink href= '#Contact' id = "navbarLinks"> Contact </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
  

    );
  }
}





