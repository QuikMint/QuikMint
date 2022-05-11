import { useRouter } from 'next/router'
import Head from 'next/head'
import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {

  const router = useRouter()

  return (
    <>
      <Head>
        <title>QuikMint</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar className='sticky top-0 z-[1000]'/>
      {children}
      <Footer />
    </>
  )
}
