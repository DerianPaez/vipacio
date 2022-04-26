import * as React from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'

// Data
import { homeData } from '@data/home.data'

// Components
import Section from '@components/common/Section'

const HomeStyled = styled.div`

  .hero {
    background-image: url(/assets/Hero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 40% 60%;
    height: 100vh;
    display: grid;
    align-items: center;

    .hero__content {
      display: grid;
      gap: 10px;
    }

    .hero__title {
      font-size: 1.8em;
      color: ${({ theme }) => theme.colors.secundaryLight};
      line-height: 1em;
    }

    .typed {
      font-size: inherit;
      color: ${({ theme }) => theme.colors.accent};
      display: inline;
    }

    .typed-cursor {
      font-size: inherit;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.accent};
    }

    .hero__description {
      color: ${({ theme }) => theme.colors.secundaryLight};
    }

    .hero__button {
      background-color: transparent;
      color: ${({ theme }) => theme.colors.secundaryLight};
      border: 2px solid ${({ theme }) => theme.colors.accent};
      padding: 0px 15px;
      outline: none;
      cursor: pointer;
      transition: .2s;
      text-transform: uppercase;
      width: max-content;
    }

    @media (min-width: 768px) {
      .hero__container {
        text-align: center;
      }

      .hero__title {
        font-size: 2.2em;
      }

      .hero__description {
        text-align: center;
        font-size: 1.2em;
      }

      .hero__button {
        width: max-content;
        justify-self: center;
      }
    }

    @media (min-width: 1024px) {
      .hero__title {
        font-size: 3.4em;
      }

      .hero__description {
        font-size: 1.6em;
      }
    }
  }

`

const Home: React.FC = () => {
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed((el.current !== null) ? el.current : '', {
      strings: homeData.hero.typed,
      loop: true,
      backDelay: 1500,
      cursorChar: '|',
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 300,
      autoInsertCss: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <HomeStyled>
      <Section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h2 className='hero__title'>{homeData.hero.headline} <span className="typed" ref={el}></span></h2>
            <p className='hero__description'>{homeData.hero.description}</p>
            <a href="#service-id" className="hero__button">{homeData.hero.button}</a>
          </div>
        </div>
      </Section>
    </HomeStyled>
  )
}

export default Home