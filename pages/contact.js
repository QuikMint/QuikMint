import { collection, addDoc } from 'firebase/firestore'
import { db } from '../utils/fire'
import router from 'next/router'
import { useState } from 'react'

export default function Contact() {

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [inquiry, setInquiry] = useState('')

  async function handleContact(e) {
    e.preventDefault()

    const formData = {
      name: firstName + ' ' + lastName,
      email: email,
      inquiry: inquiry,
      timestamp: Date.now(),
    }

    if (firstName !== '' && lastName !== '' && inquiry !== '') {
      addDoc(collection(db, 'inquiries'), formData)
        .then(() => {
          alert('Inquiry submitted 👍')
					router.push('/smpayments')
        })
        .catch(error => {
          alert(error.message)
        })
      return
    }
    console.log('poopyfart')
  }

  return (
    <div className='flex justify-center items-center content-center mt-24 mb-96'>
      <form className='w-full max-w-lg bg-[#f4f8fa] border-[1px] border-[#cccccc] rounded-md p-4' onSubmit={handleContact}>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='first-name'
            >
              First Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='first-name'
              name='first'
              type='text'
              placeholder='John'
              value={firstName}
              onChange={e => setFirstName(() => e.target.value)}
              required
            />
            <p className='text-red-500 text-xs italic'>Please fill out this field.</p>
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='last-name'
            >
              Last Name
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='last-name'
              type='text'
              placeholder='Doe'
              value={lastName}
              onChange={e => setLastName(() => e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              E-mail
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='email'
              name='email'
              type='email'
              value={email}
              onChange={e => setEmail(() => e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Message
            </label>
            <textarea
              className=' no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
              name='message'
              id='message'
              defaultValue={''}
              value={inquiry}
              onChange={e => setInquiry(() => e.target.value)}
              required
            />
          </div>
        </div>
        <div className='md:flex md:items-center'>
          <div className='w-full'>
            <button
              className='w-full shadow bg-blue-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
              name='submit'
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      prop: 'hello'
    }
  }
}