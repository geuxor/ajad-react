const createStripeAccount = async () => {
  console.log('createStripeAccount');
  const stripeAccount = await fetch('http://localhost:3001/stripe/account')
  console.log('stripeAccount', stripeAccount);
  return await stripeAccount.json()
}

const createStripeAccountLink = async (account) => {
  console.log('createStripeAccountLink');
  console.log(account);
  
  const stripeAccountLink = await fetch('http://localhost:3001/stripe/accountlink', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(account) //JSON.stringify(
  })
  console.log('stripeAccountLink', stripeAccountLink);
  return await stripeAccountLink.json()
}

export { createStripeAccount, createStripeAccountLink }
