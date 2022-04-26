import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  className?: string
}

const LogoStyled = styled.div`
  .logo {
    font-size: 30px;
    font-weight: bold;
    color: ${({ theme }) => theme.secundaryLight};
  }
`

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <LogoStyled className={className}>
      <Link href="/">
        <a className="logo" aria-label="Logo">
          Logo
        </a>
      </Link>
    </LogoStyled>
  )
}

export default Logo
