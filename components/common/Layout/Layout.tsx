import * as React from 'react'
import styled from 'styled-components'

import Navbar from '@components/common/Navbar'
import Footer from '@components/common/Footer'

type Props = {
  children: React.ReactNode,
}

const LayoutStyles = styled.div`
  min-height: 100vh;

  main {
    padding-top: 64px;
  }
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <LayoutStyles>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  )
}

export default Layout
