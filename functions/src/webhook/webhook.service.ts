import stripe from '../config/stripe.config'
import { v4 } from 'uuid'
import db from '../config/firestore.config'
import { Customer } from '../customer'
import { emailService } from '../email'

async function handleCheckout(event: any) {
  const newCust = await newCustomerFromStripe(event)
  if (newCust.success) {
    const customer = newCust.customer
    emailService.sendWithSendGrid(customer.email, customer.id)
  }
  return newCust.error
}

export async function newCustomerFromStripe(event: any) {
  try {
    const cust: any = await stripe.customers
      .retrieve(event.data.object.customer, { apiKey: process.env.STRIPE_SECRET })

    const newCustomer: Customer = {
      created: Date.now(),
      id: v4(),
      name: cust.name || '',
      customer_id: cust.id,
      email: cust.email,
      phone: cust.phone,
      complete: false,
      changes: [],
    }

    try {

      await db
        .collection('customers')
        .doc(newCustomer.id)
        .set({
          ...newCustomer,
          created_at: Date.now().toString(),
        })
      return {success: true, error: null, customer: newCustomer}

    } catch (err) {
      return {success: false, error: err, customer: null}

    }
  } catch (err_1) {
    return {success: false, error: err_1, customer: null}
  }
}

export default handleCheckout
