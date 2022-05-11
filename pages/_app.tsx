import "aos/dist/aos.css";
import * as React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { useRouter } from "next/router";
import AOS from 'aos'
import * as gtag from '@lib/gtag'

// Assets
import '@assets/globals.css'
import '@assets/chrome-bug.css'

// Redux
import { initStore } from '@state/store'

// Config
import { defaultTheme } from '@config/themeConfig'

// Components
import { Head, Layout } from '@components/common'
import Preloader from '@components/common/Preloader'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = initStore()
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  // Preloader
  React.useEffect(() => {
    const interval = setTimeout(() => setIsLoading(true), 1500)
    return () => clearTimeout(interval)
  })

  // AOS Animation
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  })

  // Google Analitics
  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    }
  }, [router.events])

  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Head />
        {
          !isLoading
            ? <Preloader />
            : <Layout>
                <Component {...pageProps} />
              </Layout>
        }
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
