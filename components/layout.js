/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'
import Script from 'next/script'

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
        <title>QuikMint</title>
        <link rel='icon' href='/favicon.ico' />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=UA-229750642-1'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-229750642-1');
        `}
        </Script>
      </Head>
      {nav && <Navbar className='sticky top-0 z-[1000]' />}
      {children}
      {nav && <Footer />}
    </>
  )
}
