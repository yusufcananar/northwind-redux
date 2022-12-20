import React, { useState } from "react";
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
  DropdownItem,
  NavbarText,
} from "reactstrap";

import logo from "../../vader.png";
import CartSummary from "../cart/CartSummary";

function Navi(args) {
  const textStyle = { color: "green", textDecoration: "none" };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="dark" dark expand={false} {...args}>
        <NavbarBrand href="/">
          <img
            src={logo}
            className="rounded"
            width={100}
            height={100}
            alt="logo"
          />
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/components/" style={textStyle}>
              Components
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink
              href="https://github.com/reactstrap/reactstrap"
              style={textStyle}
            >
              GitHub
            </NavLink>
          </NavItem>
          <CartSummary />
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navi;
