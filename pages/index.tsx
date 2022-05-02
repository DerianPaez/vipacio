import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Typed from 'typed.js'

// Data
import { homeData } from '@data/home.data'

// Icons
import { Hr, Seo, WebDesign, WebDevelopment, WebLayout } from '@components/icons'

// Components
import { Section } from '@components/common'

const HomeStyled = styled.div`

  .hero {
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(/assets/Hero.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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

  .aboutUs {
    .aboutUs__container {
      display: grid;
      grid-template-areas:
        "content"
        "image";
      justify-content: center;
      align-items: center;
      gap: 40px;
    }

    .aboutUs__content {
      display: grid;
      grid-area: content;
      gap: 20px;
    }

    .aboutUs__main {
      display: grid;
      gap: 30px;
    }

    .aboutUs__values {
      display: grid;
      gap: 20px;
    }

    .value {
      display: grid;
      grid-auto-flow: row;
      grid-auto-rows: max-content;
      gap: 10px;
    }

    .value__title {
      display: grid;
      grid-auto-flow: row;
      grid-auto-rows: max-content;
      text-transform: uppercase;

      h3 {
        font-size: 16px;
      }
    }

    .value__text {
      font-size: 14px;
    }

    .aboutUs__image {
      position: relative;
      height: 100%;
      min-height: 250px;
      width: 100%;
      height: 100%;
      grid-area: image;
    }

    @media (min-width: 425px) {
      .aboutUs__values {
        grid-auto-flow: column;
        grid-auto-columns: 1fr;
      }
    }

    @media (min-width: 768px) {
      .aboutUs__image {
        min-height: 350px;
      }
    }

    @media (min-width: 1024px) {
      .aboutUs__container {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "image content";
      }
    }
  }

  .services {
    .services__container {
      display: grid;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }

    .services__content {
      display: grid;
      gap: 30px;
    }

    .services__list {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      gap:  20px;
    }

    .service {
      display: grid;
      grid-auto-flow: row;
      grid-auto-rows: max-content;
      align-items: center;
      gap: 10px;
    }

    .service__title {
      display: grid;
      grid-auto-rows: max-content;
      grid-auto-flow: row;
      text-transform: uppercase;

      h3 {
        font-size: 16px;
      }
    }

    .services__image {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 250px;
    }

    @media (min-width: 768px) {
      .services__list {
        grid-template-columns: repeat(2, 1fr);
      }

      .services__image {
        min-height: 350px;
      }
    }

    @media (min-width: 1024px) {
      .services__container {
        grid-template-columns: 1fr 1fr;
      }
    }
  }

  .publicity {}

  .processWork {}

  .prices {}

  .portfolio {}

  .contact {}
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

      <Section id="nosotros" className="aboutUs">
        <div className="aboutUs__container">
          <div className="aboutUs__content">
            <div className="aboutUs__main">
              <h2 className="aboutUs__h2">{homeData.aboutUs.title}</h2>
              <div className="aboutUs__text">
                <p>{homeData.aboutUs.text[0]}</p>
                <br />
                <p>{homeData.aboutUs.text[1]}</p>
              </div>
            </div>

            <div className="aboutUs__values">
              {homeData.aboutUs.values.map((value) => {
                return (
                  <div key={value.id} className="value">
                    <div className="value__title">
                      <h3 className="value__h3">{value.name}</h3>
                      <Hr />
                    </div>
                    <p className="value__text">{value.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <figure className="aboutUs__image">
            {homeData.aboutUs.image &&
              <Image
                src={homeData.aboutUs.image.url}
                alt={homeData.aboutUs.image.alt}
                layout="fill"
                objectFit="contain"
                priority={false}
              />
            }
          </figure>
        </div>
      </Section>

      <Section id="servicios" className="services">
        <div className="services__container">
          <div className="services__content">
            <h2 data-aos="fade-up-right" className="title__h2">Servicios</h2>

            <div data-aos="fade-up-right" className="services__list">
              {homeData.services.serviceList.map((service) => {
                return (
                  <div key={service.id} className="service">
                    <div className="service__title">
                      <h3 className="title__h3">{service.name}</h3>
                      <Hr />
                    </div>
                    <p className="service__content">{service.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div data-aos="fade-up-left" className="services__image">
            {homeData.services.image &&
              <Image
                src={homeData.services.image.url}
                alt={homeData.services.image.alt}
                layout="fill"
                objectFit="contain"
                priority={false}
              />
            }
          </div>
        </div>
      </Section>

      <Section className="publicity">
        <div className="publicity__container"></div>
      </Section>

      <Section className="processWork">
        <div className="processWork__container"></div>
      </Section>

      <Section id="precios" className="prices">
        <div className="prices__container"></div>
      </Section>

      <Section id="portafolio" className="portfolio">
        <div className="portfolio__container"></div>
      </Section>

      <Section id="contacto" className="contact">
        <div className="contact__container"></div>
      </Section>
    </HomeStyled>
  )
}

export default Home