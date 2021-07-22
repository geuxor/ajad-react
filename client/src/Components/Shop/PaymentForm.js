import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from 'axios'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: "00f",
      color: '#000',
      fontWeight: 500,
      fontFamily: 'Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased'
    },
    invalid: {
      iconColor: '#00e',
      color: '#00e'
    }
  }
}

const PaymentForm = () => {

  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const results = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    console.log(results);    

    if (!results.error) {
      try {
        const { id } = results.paymentMethod
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 1000,
          id
        })
        if (response.data.success) {
          console.log('successfull payment!');
          setSuccess(true)
        }
      } catch (err) {
        console.log("Error", err);
      }
    } else {
      console.log(results.error);
    }
  }
  return (
    <div className="container col-4">
    
      {!success ?
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
        :
        <div>
          <h2>You just bought something.. </h2>
        </div>
      }
    </div>

  )
}
export default PaymentForm