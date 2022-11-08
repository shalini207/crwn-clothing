import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51M1kFnSDqPqUyf5rOAKa2KZwMfRQMYKF35lvI4Iqmp9Asjqi5CCOKrqhJk8tt2oFGuwdXeGsewN7Fjng3nzn4t1f00msLhrtqm";

  const onToken = token => {
   console.log( token);
   alert( 'Payment succeessful')
  }

    return (
        <StripeCheckout
        label = 'Pay Now'
        name = 'CRWN CLOTHING Ltd.'
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUZ.svg"
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel = 'Pay Now'
        token ={onToken}
        stripeKey={publishableKey }
         /> 
    )
};


export default StripeCheckoutButton;