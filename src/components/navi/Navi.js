import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import logo from "../../vader.png";
import CartSummary from "../cart/CartSummary";

function Navi(args) {
  return (
    <div>
      <Navbar color="dark" dark expand={false} {...args}>

          <Link className="navbar-brand" to={"/"}>
            <img
              src={logo}
              className="rounded"
              width={100}
              height={100}
              alt="logo"
            />
          </Link>

        <Nav>
          <NavItem>
              <Link className="nav-link" to="/saveproduct">Add Product</Link>
          </NavItem>
          <CartSummary />
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navi;
