import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'shards-react';
  
function NavBar() {
  return (
    <Navbar type="dark" theme="primary" expand="md">
      <NavbarBrand href="/">Setter Analytics UI</NavbarBrand>

      <Nav navbar>
        <NavItem>
        <NavLink active href="/geographic-segmentation">
            Home
        </NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="#" disabled>
            Geographic Segmentation
        </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;