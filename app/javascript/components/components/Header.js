import React, { Component } from 'react'
import { Nav, NavItem, NavbarBrand,NavbarToggler, Collapse, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, Navbar, DropdownMenu, NavbarText } from 'reactstrap'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in:", logged_in)
    console.log("current_user:", current_user)
    return (
      <>
      <Navbar
        color="dark"
        dark
        expand="true"
        fixed="top"
      >
        <NavbarBrand href="/">
          Villaeo
        </NavbarBrand>
          <Nav
            className="d-flex justify-content-end"
            
          >
              {!logged_in &&
                <NavItem>
                  <a href={sign_in_route} className="nav-link">Sign In</a>
                </NavItem>
              }
                        {!logged_in &&
                <NavItem>
                  <a href={new_user_route} className="nav-link">Sign Up</a>
                </NavItem>
              }
            {logged_in &&
                <NavItem>
                  <a href={sign_out_route} className="nav-link">Sign Out</a>
                </NavItem>
              }
          </Nav>
      </Navbar>
      </>
    )
  }
}
export default Header