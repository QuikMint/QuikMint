import db from '../config/firestore.config'
import { Customer } from './customer.model'

async function get(id: string): Promise<FirebaseFirestore.DocumentData> {
  const doc = await db.collection('customers').doc(id).get()
  let customer: FirebaseFirestore.DocumentData = doc.data()

  return customer
}

async function getAll(): Promise<FirebaseFirestore.DocumentData[]> {
  const snap = await db.collection('customers').get()
  let customers: FirebaseFirestore.DocumentData[] = []
  snap.docs.map((doc, i) => {
    customers[i] = doc.data()
  })
  return customers
}

function write(customer: Customer) {
  return db.collection('customers').doc(customer.id).set(customer)
}

function update(cust: any): Promise<FirebaseFirestore.WriteResult> {
  return db.doc(`/customers/${cust.id}`).update(cust)
}

function remove(id: string) {
  return db.collection('customers').doc(id).delete()
}

async function exists(id: string) {
  const doc = await db.doc(`/customers/${id}`).get()
  return doc.exists
}

async function rejectUUID(id: string) {
  const ex = await customerService.exists(id)
  if (!ex) {
    return true
  }
  return false
}

export const customerService = { get, getAll, write, update, remove, exists, rejectUUID }
