import * as React from 'react'
import * as Yup from 'yup'
import styled from 'styled-components'
import Image from 'next/image'
import Typed from 'typed.js'
import { useFormik } from 'formik'

// Data
import { homeData } from '@data/home.data'

// Icons
import { Facebook, Hr, Instagram, WhatsApp } from '@components/icons'

// Components
import { Button, Input, Section } from '@components/common'
import Textarea from '@components/common/Textarea'
import { socialMedia } from '@data/socialMedia.data'
import Link from 'next/link'

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

    .hero__button {
      color: ${({ theme }) => theme.colors.secundaryLight};

      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }
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

    @media (min-width: 768px) {
      .hero__container {
        text-align: center;
      }

      .hero__content {
        justify-content: center;

        a {
          justify-self: center;
        }
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

  .publicity {
    background-position: top right;
    background-image: url(/assets/BackgroundPublicity.png);
    padding: 70px 0;

    .publicity__container {
      display: grid;
      gap: 10px;
    }

    h2 {
      color: ${({ theme }) => theme.colors.secundaryLight};
    }

    a {
      justify-self: flex-start;
      button {
        color: ${({ theme }) => theme.colors.secundaryLight};

        &:hover {
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }

  .processWork {
    .processWork__container {
      display: grid;
      grid-template-areas:
        "title"
        "left"
        "right"
        "center";
      gap: 30px;
    }

    .processWork__title { grid-area: title }
    .processWork__left { grid-area: left }
    .processWork__center { grid-area: center }
    .processWork__right { grid-area: right }

    .processWork__title {
      text-align: center;
    }

    .processWork__left,
    .processWork__right {
      display: grid;
      gap: 20px;
    }

    .processWork__center {
      position: relative;
      min-height: 550px;
      height: 100%;
    }

    .process {
      display: grid;
      gap: 5px;
    }

    .process__header {
      display: grid;
      grid-auto-flow: row;
      grid-auto-rows: max-content;
    }

    .process__header h3 {
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    @media (min-width: 768px) {
      .processWork__container {
        grid-template-areas:
          "title title title"
          "left center right";
        grid-template-columns: .7fr 300px .7fr;
        justify-content: center;
        align-items: center;
      }

      .processWork__center {
        max-width: 300px;
      }

      .processWork__left,
      .processWork__right {
        max-width: 300px;
        display: grid;
        gap: 30px;
      }

      .processWork__left {
        justify-self: right;
        text-align: right;
        svg {
          justify-self: flex-end;
        }
      }
    }

    @media (min-width: 1024px) {
      .processWork__container {
        gap: 40px;
      }

      .processWork__left,
      .processWork__right {
        gap: 50px;
      }
    }
  }

  .prices {
    .prices__container {
      display: grid;
      gap: 30px;
    }

    .prices__list {
      display: grid;
      gap: 30px;
    }

    .price {
      height: max-content;
      display: grid;
      grid-auto-flow: row;
      grid-auto-rows: max-content;
      gap: 30px;
      padding: 30px 20px;
      background: ${({ theme }) => theme.colors.secundaryLight};
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }

    .price__title {
      font-size: 18px;
    }

    .price__item {
      display: flex;
      flex-direction: column;
      font-size: 45px;
      font-weight: bold;
      line-height: 1em;
      margin-top: 10px;
    }

    .price__item span {
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      color: var(--gray-color);
    }

    .price__features {
      display: grid;
      grid-auto-flow: row;
      grid-auto-rows: max-content;
      gap: 10px;
    }

    .price__features li {
      list-style: disc;
      margin-left: 30px;
    }

    @media (min-width: 768px) {
      .prices__title {
        text-align: center;
      }

      .prices__list {
        justify-content: center;
        grid-auto-flow: column;
        grid-auto-columns: minmax(150px, 300px);
      }
    }
  }

  .portfolio {
    background-image: url(/assets/BackgroundPortfolio.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 70px 0;

    .portfolio__container {
      display: grid;
      gap: 30px;
    }

    .portfolio__title {
      text-align: center;
      color: ${({ theme }) => theme.colors.secundaryLight};
    }

    .portfolio__list {
      display: grid;
      gap: 20px;
    }

    .project {
      position: relative;
      display: block;
      width: 100%;
      transition: .3s;

      &:hover {
        transform: scale(1.1);
      }

      a {
        width: 100%;
      }
    }

    @media (min-width: 768px) {
      .portfolio__list {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  .contact {
    .contact__container {
      display: grid;
      gap: 30px;
    }

    .contact__form {
      display: grid;
      gap: 30px;
      background-color: ${({ theme }) => theme
    .colors.secundaryLight};
      box-shadow: ${({ theme }) => theme.colors.shadow};
      padding: 40px 20px;
    }

    .form {
      display: grid;
      grid-template-areas:
        "name"
        "phone"
        "email"
        "message"
        "button";
      gap: 20px;
    }

    .name { grid-area: name; }
    .phone { grid-area: phone; }
    .email { grid-area: email; }
    .message { grid-area: message; }
    .button { grid-area: button; }
    .line { grid-area: line; display: none }

    .contact__info {
      display: grid;
      grid-auto-flow: row;
      grid-auto-rows: max-content;
      gap: 20px;
      height: 100%;
      background-color: ${({ theme }) => theme
    .colors.secundaryLight};
      box-shadow: ${({ theme }) => theme.colors.shadow};
      padding: 40px 20px;
    }

    .info {
      display: grid;
      gap: 10px;
    }

    .info__header {
      display: grid;
      gap: 0px;
    }

    .info__list {
      display: grid;
      gap: 5px;
    }

    .info__item {
      list-style: disc;
      margin-left: 25px;

      a {
        width: 100%;
      }
    }

    .socialMedia__list {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: 13px;
    }

    .socialMedia__item {
      a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.black};
        display: flex;
        justify-content: center;
        align-items: center;

        path {
          fill: ${({ theme }) => theme.colors.black}
        }
      }
    }

    @media (min-width: 768px) {
      .form {
        grid-template-areas:
          "name phone"
          "email email"
          "message message"
          "button button";
      }
    }

    @media (min-width: 1024px) {
      .contact__container {
        grid-template-columns: 1.7fr 1fr;
      }

      .contact__form,
      .contact__info {
        padding: 40px;
      }

      .form {
        grid-template-areas:
          "name line message"
          "phone line message"
          "email line button";
        grid-template-columns: 1fr max-content 1fr;
        gap: 20px 40px;
      }

      .line {
        display: block;
        width: 1px;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.black};
      }

      .message {
        textarea {
          height: 100%;
          border-bottom: none;
        }
      }

      .button {
        align-self: flex-end;
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

  const initialValues = { name: '', phone: '', email: '', message: '' }
  const validationSchema = Yup.object({
    name: Yup.string(),
    phone: Yup.string(),
    email: Yup.string().email('Correo Invalido'),
    message: Yup.string().required('El mensaje es Obligatorio')
  })
  const onSubmit = (values: any, actions: any) => {
    console.log(values)
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return (
    <HomeStyled>
      <Section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <h2 className='hero__title'>{homeData.hero.headline} <span className="typed" ref={el}></span></h2>
            <p className='hero__description'>{homeData.hero.description}</p>
            <Button href="#servicios" className="hero__button">{homeData.hero.button}</Button>
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
        <div className="publicity__container">
          <h2>{homeData.publicity.title}</h2>
          <Button href={homeData.publicity.button.url}>{homeData.publicity.button.text}</Button>
        </div>
      </Section>

      <Section className="processWork">
        <div className="processWork__container">
          <h2 className="processWork__title">{homeData.processWork.title}</h2>
          <div className="processWork__left">
            {homeData.processWork.processList.slice(0, 3).map((process) => {
              return (
                <div key={process.id} className="process">
                  <div className="process__header">
                    <h3>{process.title}</h3>
                    <Hr />
                  </div>
                  <p className="process__text">{process.text}</p>
                </div>
              )
            })}
          </div>
          <div className="processWork__center">
            {homeData.processWork.image &&
              <Image
                src={homeData.processWork.image.url}
                alt={homeData.processWork.image.alt}
                layout="fill"
                objectFit="contain"
                priority={false}
              />
            }
          </div>
          <div className="processWork__right">
            {homeData.processWork.processList.slice(3).map((process) => {
              return (
                <div key={process.id} className="process">
                  <div className="process__header">
                    <h3>{process.title}</h3>
                    <Hr />
                  </div>
                  <p className="process__text">{process.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section id="precios" className="prices">
        <div className="prices__container">
          <h2 className="prices__title">{homeData.prices.title}</h2>
          <div className="prices__list">
            {homeData.prices.pricesList.map((price) => {
              return (
                <article key={price.id} className="price">
                  <div className="price__header">
                    <h3 className="price__title">{price.title}</h3>
                    <p className="price__item"><span>desde</span>{price.price}</p>
                  </div>

                  <ul className="price__features">
                    {price.items.map((item) => {
                      return (
                        <li key={item.id}>{item.text}</li>
                      )
                    })}
                  </ul>
                  <Button>Consultar</Button>
                </article>
              )
            })}
          </div>
        </div>
      </Section>

      <Section id="portafolio" className="portfolio">
        <div className="portfolio__container">
          <h2 className="portfolio__title">{homeData.portfolio.title}</h2>

          <div className="portfolio__list">
            {homeData.portfolio.projectList.map((project) => {
              return (
                <div key={project.id} className="project">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.image &&
                      <Image
                        src={project.image.url}
                        alt={project.image.alt}
                        width={1080}
                        height={674.6}
                        priority={false}
                      />
                    }
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section id="contacto" className="contact">
        <div className="contact__container">

          <div className="contact__form">
            <h2>{homeData.contact.title}</h2>
            <form className="form" onSubmit={formik.handleSubmit}>
              <Input id="name" form={formik} className="input name" type="text" name="name" placeholder="John Doe" label="Nombre" />
              <Input id="phone" form={formik} className="input phone" type="tel" name="phone" placeholder="+593 99 999 9999" label="Celular" />
              <Input id="email" form={formik} className="input email" type="email" name="email" placeholder="johndoe@dominio.com" label="Email" />
              <div className="line"></div>
              <Textarea id="message" form={formik} className="textarea message" name="message" placeholder="Hola, soy John Doe
Me interesa crear un sitio web para mi empresa...." label="Mensaje" />
              <Button className="button" type="submit">Enviar</Button>
            </form>
          </div>

          <div className="contact__info">
            <div className="info">
              <div className="info__header">
                <h3 className="info__title">{homeData.contact.infoList.phones.title}</h3>
                <Hr />
              </div>
              <ul className="info__list">
                {homeData.contact.infoList.phones.list.map((phone) => {
                  return (
                    <li key={phone.id}   className="info__item">
                      <a href={`tel:${phone.text.replace(/ /g, '').replace('+', '')}`}>{phone.text}</a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="info">
              <div className="info__header">
                <h3 className="info__title">{homeData.contact.infoList.emails.title}</h3>
                <Hr />
              </div>
              <ul className="info__list">
                {homeData.contact.infoList.emails.list.map((email) => {
                  return (
                    <li key={email.id} className="info__item">
                      <a href={`mailto:${email.text}`}>{email.text}</a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="info">
              <div className="info__header">
                <h3 className="info__title">{socialMedia.title}</h3>
                <Hr />
              </div>
              <ul className="socialMedia__list">
                <li className="socialMedia__item">
                  <a href={socialMedia.Facebook.url} target="_blank" rel="noreferrer" >
                    <Facebook width="17" height="17" />
                  </a>
                </li>
                <li className="socialMedia__item">
                  <a href={socialMedia.Instagram.url} target="_blank" rel="noreferrer">
                    <Instagram width="17" height="17" />
                  </a>
                </li>
                <li className="socialMedia__item">
                  <a href={socialMedia.WhatsApp.url} target="_blank" rel="noreferrer">
                    <WhatsApp width="17" height="17"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </Section>
    </HomeStyled>
  )
}

export default Home