import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'
import { AuthProvider } from '../auth/AuthProvider'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
          <Component display='true' {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
