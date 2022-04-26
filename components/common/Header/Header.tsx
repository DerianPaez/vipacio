import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

// Config
import { Wrapper } from '@config/themeConfig'

// Icons
import { Logo, Menu } from '@components/icons'

// Hooks
import useUi from '@hooks/useUi'
import useWindowScroll from '@hooks/useWindowScroll'
import Navbar from '../Navbar'

type HeaderStyledProps = {
  isHeaderActive: boolean
}

const HeaderStyled = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 20px 0;
  z-index: ${({ theme }) => theme.positions.header};

  .header__mainContainer {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-items: center;
  }

  .header__logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header__button {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background: none;
  }

  &.active {
    transition: .4s;
    box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 20%);
    background-color: ${({ theme }) => theme.colors.primary};
    a {
      color: ${({ theme }) => theme.colors.secundaryLight};
    }
  }

  @media (min-width: 1024px) {
    .header__button {
      display: none;
    }
  }
`

const Header: React.FC = () => {
  const [isHeaderActive, setHeaderActive] = React.useState(false)

  const { y } = useWindowScroll()

  React.useEffect(() => {
    if(y > 60) {
      setHeaderActive(() => true)
    } else {
      setHeaderActive(() => false)
    }
  }, [isHeaderActive, y])

  const { isSidebarOpen, toogleSidebar } = useUi()
  return (
    <HeaderStyled className={`${isHeaderActive && 'active'}`}>
      <Wrapper>
        <div className="header__mainContainer">
          <Link href="/">
            <a className="header__logo">
              <Logo />
            </a>
          </Link>
          <button onClick={() => toogleSidebar(isSidebarOpen)} className="header__button">
            <Menu width="30" height="30"/>
          </button>
          <Navbar />
        </div>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
