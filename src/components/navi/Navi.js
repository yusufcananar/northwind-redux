import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import logo from "../../vader.png";
import CartSummary from "../cart/CartSummary";

function Navi(args) {
  return (
    <div>
      <Navbar color="dark" dark expand={false} {...args}>
        <NavbarBrand>
          <Link to={"/"}>
            <img
              src={logo}
              className="rounded"
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
        </NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink>
              <Link to="/saveproduct">Add Product</Link>
            </NavLink>
          </NavItem>
          <CartSummary />
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navi;
