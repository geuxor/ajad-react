import React from 'react';
import PaymentForm from './PaymentForm'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';

const PUBLIC_KEY = "pk_test_ikdSSAkhvqNA5FCSPDWee6U7"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

function Shop(props) {
  return (
    <div>

      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default Shop;