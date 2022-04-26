import * as React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

// Assets
import '@assets/globals.css'
import '@assets/chrome-bug.css'

// Config
import { defaultTheme } from '@config/themeConfig'

// Components
import Head from '@components/common/Head'
import Layout from '@components/common/Layout'

type Props = {
  children?: React.ReactNode
}

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
