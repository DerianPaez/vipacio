import { Wrapper } from '@config/themeConfig'
import * as React from 'react'
import styled from 'styled-components'

type StyledProps = {
  background?: string
}

type Props = {
  children: React.ReactNode
  id?: string
  className?: string
  classNameWrapper?: string
}

const SectionStyled = styled.section<StyledProps>`
  margin-bottom: 90px;
`

const Section: React.FC<Props> = ({ children, ...props }) => {
  return (
    <SectionStyled {...props}>
      <Wrapper>
        {children}
      </Wrapper>
    </SectionStyled>
  )
}

export default Section
