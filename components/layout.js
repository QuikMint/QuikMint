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
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <title>QuikMint</title>
        <link rel='icon' href='/favicon.ico' />
        <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
        
      />
      
      </Head>
      {nav && <Navbar className='sticky top-0 z-[1000]' />}
      {children}
      {nav && <Footer />}
    </>
  )
}
