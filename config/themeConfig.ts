import styled from "styled-components";

export const defaultTheme = {
  colors: {
    primary: '#000000',
    secundaryLight: '#ffffff',
    secundaryDark: '#205A33',
    black: '#000000',
    paragraph: '#5F5F5F',
    accent: '#05FF00',
    stroke: '#333333',
    label: '#565656',
    placeholder: '#ABABAB',
    shadow: '0px 4px 24px 0px #00000040',
    error: 'red',
  },
  positions: {
    header: 1000,
    navbar: 900,
    controllers: 600,
    image: 500,
  }
}

export const Wrapper = styled.div`
  padding: 0 5%;
`

export const H2 = styled.h2`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.paragraph};
  line-height: 22px;
`