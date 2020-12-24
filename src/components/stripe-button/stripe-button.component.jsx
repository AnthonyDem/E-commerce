import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publicKey = 'pk_test_51I1ZE7DA4Ti948HsEDsyq5cQrrYMIXGiPuQlu3VOL5Mm7boIA40n9EaS8CfyB0GWEQlVetrbfzqVIwUyfWgWYRMH00qBU8I4CV';

  const onToken = token => {
      console.log(token);
      alert('Payment Successfull')
    };

  return (
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publicKey}
      />
  );
};

export default StripeButton;
