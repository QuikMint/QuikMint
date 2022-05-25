import { useEffect } from 'react'
import Layout from '../components/layout'
import '../styles/globals.css'
import { AuthProvider } from '../auth/AuthProvider'
import { useRouter } from 'next/router'
import * as gtag from '../components/gtag'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <AuthProvider>
      <Layout>
          <Component display='true' {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
