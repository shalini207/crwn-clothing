import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItems from "../../components/checkout-items/checkout-items.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.components";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, WarningContainer} from './checkout.styles'

const Checkout = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>{" "}
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>{" "}
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>{" "}
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>{" "}
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItems key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer> Total: ${total} </TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123 
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapToStateProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapToStateProps)(Checkout);
