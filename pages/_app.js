import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import '../styles/globals.css'
import { AuthProvider } from '../auth'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>QuikMint</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Component display='true' {...pageProps} />
      <Footer />
    </AuthProvider>
  )
}

export default MyApp
