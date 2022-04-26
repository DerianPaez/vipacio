import * as React from 'react'
import styled from 'styled-components'

// Data
import { navLinks } from '@data/navLinks.data'

// Config
import { Wrapper } from '@config/themeConfig'

// Icoons
import Menu from '@components/icons/Menu'

// Components
import Logo from '@components/common/Logo'
import Navlink from '@components/common/Navlink'
import Button from '@components/common/Button'

type StyledProps = {
  isOpenSidebar: boolean
}

const NavbarStyled = styled.header<StyledProps>`
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.primary};
  z-index: 1000;

  .header__container {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
  }

  .menu__nav {
    display: ${({ isOpenSidebar }) => isOpenSidebar ? 'grid' : 'none'};
    padding: 0 3%;
    position: fixed;
    top: 64px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.primary};
    ul {
      height: max-content;
      display: grid;
      grid-auto-rows: max-content;
      gap: 20px;
      margin-top: 40px;
    }
  }

  .menu__hamburguer {
    display: flex;
    justify-content: center;
    align-self: center;
  }

  @media (min-width: 768px) {
    .menu__nav {
      position: static;
      display: grid;
      padding: 0;
      ul {
        grid-auto-flow: column;
        margin-top: 0px;

      }
    }

    .menu__hamburguer {
      display: none;
    }
  }
`

const Navbar: React.FC= () => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false)
  const toggleSideBar = () => setIsOpenSidebar(c => !c)

  return (
    <NavbarStyled isOpenSidebar={isOpenSidebar}>
      <Wrapper>
        <div className="header__container">
          <Logo />
          <nav className="menu__nav">
            <ul>
              {navLinks.map((link) => {
                return (
                  <Navlink
                    key={link.id}
                    id={link.id}
                    name={link.name}
                    url={link.url}
                    toggleSidebar={toggleSideBar}
                  />
                )
              })}
            </ul>
          </nav>
          <Button
            className="menu__hamburguer"
            onClick={toggleSideBar}
          >
            <Menu />
          </Button>
        </div>
      </Wrapper>
    </NavbarStyled>
  )
}

export default Navbar
