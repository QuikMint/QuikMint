/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'
import Script from 'next/script'
import * as gtag from './gtag'

export default function Layout({ children }) {

  const [nav, setNav] = useState(true)

  const router = useRouter()

  useEffect(() => {
    setNav(true)
    if (router.pathname.includes('/dashboard')) setNav(() => false)
  }, [router.pathname])

  return (
    <>
      <Head>
        <title>QuikMint - Mint NFTs with ease</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {nav && <Navbar className='sticky top-0 z-[1000]' />}
      {children}
      {nav && <Footer />}
    </>
  )
}
