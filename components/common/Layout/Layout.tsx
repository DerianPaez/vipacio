import * as React from 'react'
import styled from 'styled-components'

// Components
import { Header, Footer } from '@components/common/'

// Hooks
import useUi from '@hooks/useUi'
import { useRouter } from 'next/router'

type StyledProps = {
  isSidebarOpen: boolean
}

type Props = {
  children: React.ReactNode,
}

const LayoutStyles = styled.div<StyledProps>`

`

const Layout: React.FC<Props> = ({ children }) => {
  const { isSidebarOpen } = useUi()
  return (
    <LayoutStyles isSidebarOpen={isSidebarOpen}>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutStyles>
  )
}

export default Layout
