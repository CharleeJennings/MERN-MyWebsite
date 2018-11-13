import * as React from 'react';
import '../static/css/Font.css';
 import Splashpage from './Splashpage';
import "../static/css/splashpage.css";
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

  handleScroll()
  {

  }
  componentDidMount()
  {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount()
  {
    window.removeEventListener('scroll', this.handleScroll);
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

        <Navbar fixed= 'top' dark  expand="md">
          <NavbarBrand href="/"><Splashpage/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Resume" id = "navbarLinks">Resume</NavLink>
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
