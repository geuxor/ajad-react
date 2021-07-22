import React, { useState } from "react";
import { createStripeAccount, createStripeAccountLink } from "../../Services/StripeService";
const DB_URL = "http://localhost:3001/stripe/accountdata";

function Stripe(props) {
  const [stripeAccount, setStripeAccount] = useState('');
  const [stripeAccountLink, setStripeAccountLink] = useState('')

  const createAccount = () => {
    (async () => {
      const newStripeAccount = await createStripeAccount();
      console.log("id", newStripeAccount.id);
      setStripeAccount(newStripeAccount);
      console.log('x', stripeAccount);
      const accountData = {}
      accountData['accountID'] = stripeAccount.id;
      accountData['userID'] = 'a1'
      console.log(accountData);
      postStripeAccount(accountData);
    })();
  };

  const postStripeAccount = async (accountData) => {
    console.log("client postaccountData", accountData);
    const dbData = await fetch(`${DB_URL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(accountData),
    });
    return await dbData.json();
  };

  const createAccountLink = (account) =>{
    (async () => {
      
      const newStripeAccountLink = await createStripeAccountLink(account);
      console.log(newStripeAccountLink);
      setStripeAccountLink(newStripeAccountLink)
    })()
  }

  return (
    <div>
    
      <button
        onClick={() => {
          createAccount();
        }}
      >
        Create Account
      </button>
      <div>
        <button
          onClick={() => {
            createAccountLink(stripeAccount);
          }}
        >
          Create Account Link for {stripeAccount.id}
        </button>
        <div>
          <a aria-label="" href={stripeAccountLink.url} target="blank">
            account url 
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stripe;
// <div>{stripeAccountLink}</div>