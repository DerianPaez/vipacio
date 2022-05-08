import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

// Config
import { Wrapper } from '@config/themeConfig'

// Icons
import { Logo } from '@components/icons'

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

  .footer__rights {
    p {
      color: ${({ theme }) => theme.colors.secundaryLight};
    }

    a {
      width: max-content;
    }
  }

  .footer__links {
    display: grid;
    justify-content: center;
  }

  .separator {
    display: none;
  }

  .legal__links {
    color: ${({ theme }) => theme.colors.secundaryLight};
    font-size: 14px;
    &:hover {
      color: #d4d4d4;
    }
  }

  @media (min-width: 768px) {
    .separator {
      display: block;
    }

    .footer__links {
      grid-template-columns: min-content max-content min-content;
      grid-auto-flow: column;
      grid-auto-columns: min-content;
      gap: 5px;
      justify-content: center;
      align-items: center;
    }

    .footer__content {
      grid-template-columns: 1fr;
      justify-content: space-between;
    }

    .footer__content .wrapper{
      grid-template-columns: max-content max-content;
      justify-content: space-between;
    }
  }

  @media (min-width: 1024px) {
    .footer__rights {
      display: grid;
      grid-template-columns: max-content max-content;
      justify-content: space-between;
      align-items: center;
    }
  }
`

const Footer: React.FC<Props> = () => {
  return (
    <FooterStyled>
      <div className="footer__logo">
        <Link href="/">
          <a>
            <Logo className="logo" />
          </a>
        </Link>
      </div>

      <div className="footer__content">
        <Wrapper className="wrapper">
          <div className="footer__rights">
            <p>© 2022 Copyright Vipacio All rights reserved</p>

            <div className="footer__links">
              <Link href="/privacidad">
                <a className="legal__links">
                  Políticas de privacidad
                </a>
              </Link>
              <p className="separator">|</p>
              <Link href="/terminos">
                <a className="legal__links">
                  Términos y condiciones
                </a>
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
    </FooterStyled>
  )
}

export default Footer
