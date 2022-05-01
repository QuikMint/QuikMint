import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise = null
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC);
  }
  return stripePromise;
};

export default getStripe;