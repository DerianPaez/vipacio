import * as React from 'react'
import styled from 'styled-components'

// Config
import { Wrapper } from '@config/themeConfig'

// Icons
import { Facebook, Instagram, Logo, WhatsApp } from '@components/icons'

type Props = {

}

const FooterStyled = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  .footer__logo {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }

  .logo {
    justify-self: center;
    path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  .footer__content {
    background-color: ${({ theme }) => theme.colors.primary};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    text-align: center;
    gap: 10px;
  }

  .wrapper {
    display: grid;
    gap: 5px;
  }

  .footer__rights span {
    line-height: 15px;
  }

  .footer__rights span {
    color: white;
    font-size: .9em;
  }

  .footer__icons {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    .footer__content {
      grid-template-columns: 1fr;
      justify-content: space-between;
    }

    .footer__content .wrapper{
      grid-template-columns: max-content max-content;
      justify-content: space-between;
    }
  }
`

const Footer: React.FC<Props> = () => {
  return (
    <FooterStyled>
      <div className="footer__logo">
        <Logo className="logo" />
      </div>

      <div className="footer__content">
        <Wrapper className="wrapper">
          <div className="footer__rights">
            <span>© 2022 Copyright Vipacio All rights reserved</span>
          </div>

          <div className="footer__icons">
            <a href="https://www.facebook.com/Vipacio/" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="https://www.instagram.com/vipacio/" target="_blank" rel="noopener noreferrer">
              <Instagram />
            </a>
            <a href="https://" target="_blank" rel="noopener noreferrer">
              <WhatsApp />
            </a>
          </div>
        </Wrapper>
      </div>
    </FooterStyled>
  )
}

export default Footer
