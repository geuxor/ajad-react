import React from 'react';
import PaymentForm from './PaymentForm'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import Stripe from '../Stripe/Stripe.component';

const PUBLIC_KEY = "pk_test_ikdSSAkhvqNA5FCSPDWee6U7"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

function Shop(props) {
  return (
    <div>
      <Stripe />
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default Shop;