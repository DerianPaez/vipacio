import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  id: string,
  name: string,
  url: string,
  toggleSidebar: () => void
}

const NavlinkStyled = styled.li`
  a {
    color: ${({ theme }) => theme.secundaryDark};
    :hover {
      color: ${({ theme }) => theme.secundaryLight};
    }
  }
`

const Navlink: React.FC<Props> = ({ id, name, url, toggleSidebar }) => {
  return (
    <NavlinkStyled id={id} onClick={toggleSidebar}>
      <Link href={url}>
        <a aria-label={name}>
          {name}
        </a>
      </Link>
    </NavlinkStyled>
  )
}

export default Navlink
