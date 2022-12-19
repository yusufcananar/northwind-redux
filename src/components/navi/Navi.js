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

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret style={textStyle}>
              Options
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navi;
