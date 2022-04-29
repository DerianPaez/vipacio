import * as React from 'react'
import styled from 'styled-components'
import Typed from 'typed.js'

// Data
import { homeData } from '@data/home.data'

// Components
import Section from '@components/common/Section'
import { Hr, Seo, WebDesign, WebDevelopment } from '@components/icons'
import WebLayout from '@components/icons/WebLayout'
import Image from 'next/image'

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

  .services {
    .service__wrapper {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      gap: 20px;
      overflow: hidden;
      padding: 0;
    }

    .services__container {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      gap: 30px;
      padding: 0 5%;
    }

    .services__list {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      align-items: center;
      gap:  24px;
    }

    .service {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      gap: 10px;
    }

    .service__header {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }

    .service__title {
      display: grid;
      grid-auto-flow: row;
      gap: 2px;
      text-transform: uppercase;
    }

    .services__image {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 300px;
      display: grid;
      justify-content: center;
      align-items: center;
    }

    .services__image img {
      width: 125%;
      position: relative;
    }

    @media (min-width: 768px) {
      .service__wrapper {
        grid-template-columns: 1fr 1fr;
      }

      .services__list {
        grid-template-columns: 1fr 1fr;
      }

      .services__image img {
        width: 125%;
        right: -20px;
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

      <Section className="aboutUs">
        <div className="aboutUs__container"></div>
      </Section>

      <Section className="services">
        <div className="services__container">
          <h2 data-aos="fade-up-right" className="title__h2">Servicios</h2>

          <div data-aos="fade-up-right" className="services__list">
            <div className="service">
              <div className="service__header">
                <div className="service__title">
                  <h3 className="title__h3">Diseño Web</h3>
                  <Hr />
                </div>

                <WebDesign />
              </div>

              <p className="service__content">
                Creamos potentes diseños que superarán a sus competidores más fuertes.
              </p>
            </div>

            <div className="service">
              <div className="service__header">
                <div className="service__title">
                  <h3 className="title__h3">Desarrollo Web</h3>
                  <Hr />
                </div>

                <WebDevelopment />
              </div>

              <p className="service__content">
                Creamos sitios web robustos y funcionales utilizando la tecnología más avanzada disponible.
              </p>
            </div>

            <div className="service">
              <div className="service__header">
                <div className="service__title">
                  <h3 className="title__h3">Maquetación</h3>
                  <Hr />
                </div>

                <WebLayout />
              </div>

              <p className="service__content">
                Estructuramos todas las partes requeridas de tu web al detalle y preocupándonos por el futuro de ese código.
              </p>
            </div>

            <div className="service">
              <div className="service__header">
                <div className="service__title">
                  <h3 className="title__h3">Seo</h3>
                  <Hr />
                </div>

                <Seo />
              </div>

              <p className="service__content">
                Optimizamos el sitio web para un buen Posicionamiento en el motor de búsqueda, ganando mayor visibilidad en el mercado.
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up-left" className="services__image">
          <Image
            src="/assets/Tablet.png"
            alt="Tablet"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Section>

      <Section className="publicity">
        <div className="publicity__container"></div>
      </Section>

      <Section className="processWork">
        <div className="processWork__container"></div>
      </Section>

      <Section className="prices">
        <div className="prices__container"></div>
      </Section>

      <Section className="portfolio">
        <div className="portfolio__container"></div>
      </Section>

      <Section className="contact">
        <div className="contact__container"></div>
      </Section>
    </HomeStyled>
  )
}

export default Home