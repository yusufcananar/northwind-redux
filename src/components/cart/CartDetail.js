import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class CartDetail extends Component {
  renderEmpty() {
    return (
      <div>
        <h2>Your cart is empty :/</h2>
      </div>
    );
  }

  renderCartDetail() {
    return (
      <div>
        <Table bordered borderless dark hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    color="success"
                    onClick={() => this.props.actions.increaseQuantity(cartItem)}
                  >
                    +
                  </Button>
                  <Button
                    color="secondary"
                    onClick={() => this.props.actions.decreaseQuantity(cartItem)}
                  >
                    -
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    x
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderCartDetail() : this.renderEmpty()}
      </div>
    );
  }
  addToCart(product) {
    this.props.actions.addToCart(product);
  }
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " removed from cart.");
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
      increaseQuantity: bindActionCreators(cartActions.increaseQuantity, dispatch),
      decreaseQuantity: bindActionCreators(cartActions.decreaseQuantity, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
