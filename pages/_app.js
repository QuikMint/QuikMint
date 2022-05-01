import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QuikMint</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Component display='true' {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
