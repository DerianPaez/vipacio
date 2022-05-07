import * as React from 'react'
import styled from 'styled-components'

// Data
import { navLinks } from '@data/navLinks.data'

// Components
import { Navlink } from '@components/common'

// Hooks
import useUi from '@hooks/useUi';

type StyledProps = {
  isOpen: boolean
}

const NavbarStyled = styled.nav<StyledProps>`
  /* display: ${({ isOpen }) => isOpen ? 'grid' : 'none'}; */
  display: grid;
  position: fixed;
  top: ${({ isOpen }) => isOpen ? '0' : '-100vh'};
  height: 100vh;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: top .5s;

  .navbar__container {
    height: 100%;
    display: grid;
  }

  ul {
    height: max-content;
    display: grid;
    grid-auto-rows: max-content;
    gap: 15px;
    text-align: center;
    align-self: center;
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
    display: grid;
    position: static;
    top: 0;
    background-color: transparent;
    z-index: 0;

    .navbar__container {
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      justify-content: space-between;
      align-items: center;
      grid-template-rows: auto;
    }

    ul {
      width: 100%;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      margin-top: 0;
      margin-bottom: 0;
      gap: 25px;
    }
  }
`

const Navbar: React.FC = () => {
  const { isSidebarOpen, toogleSidebar } = useUi()

  return (
    <NavbarStyled isOpen={isSidebarOpen}>
      <div className="navbar__container">
        <ul>
          {navLinks.map((link) => {
            return (
              <Navlink
                key={link.id}
                id={link.id}
                name={link.name}
                url={link.url}
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toogleSidebar}
              />
            )
          })}
        </ul>
      </div>
    </NavbarStyled>
  )
}

export default Navbar
