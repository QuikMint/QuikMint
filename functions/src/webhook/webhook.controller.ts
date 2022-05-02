import express from 'express'
import handleCheckout from './webhook.service'

function customerFromStripe(req: express.Request, res: express.Response) {
  // at some point convert req.body to Stripe.Event
  switch (req.body.type) {
    case 'checkout.session.completed':
      console.log(req.body.data.object.customer)
      // Then define and call a function to handle the event checkout.session.completed
      handleCheckout(req.body)
        .then(() => res.status(200).send(`All good`))
        .catch(err => res.status(400).send('oopsie woopsie.  handleCheckout error'))

      break
    // ... handle other event types
    default:
      console.error(`Unhandled event type ${req.body.type}`)
      res.status(400)
      return
  }
}

export const webhookController = { customerFromStripe }