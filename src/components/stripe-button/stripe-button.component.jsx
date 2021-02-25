import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Logo from '../../assets/crown.svg'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H5FGFARSWsw52BhMS1tTOGBO5RAvEoBgkGWxfCpMhOwp9b6IFQURiGasoRXFVvKBnthFTykY437FTyYcsK3fSUQ00fZTH5zp9';
    const onToken = token => {
        console.log(token)
        alert('Payment Succesful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton