import React, { Component } from "react";
import ReactDOM from "react-dom";
class CartVal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartVal: 0
    };
    this.cartValue = this.cartValue.bind(this);
  }
  cartValue() {
    setInterval(() => {
      if (localStorage.getItem("cVal") === null) {
        this.setState({ cartVal: 0 });
      } else {
        let newVal = localStorage.getItem("cVal");
        this.setState({ cartVal: newVal });
      }
    }, 100);
  }
  componentDidMount() {
    this.cartValue();
  }
  render() {
    return <span id="cartVal">{this.state.cartVal}</span>;
  }
}
export default CartVal;
