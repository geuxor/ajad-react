import React from 'react';
import StripeAccount from '../Stripe/StripeAccount.component';
import StripeElement from '../Stripe/StripeElement.component'

function Shop(props) {
  return (
    <div>
      <StripeAccount />
      <StripeElement />
    </div>
  );
}

export default Shop;