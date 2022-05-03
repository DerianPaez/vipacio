import * as React from 'react'
import styled from 'styled-components'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  className?: string
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  width?: string | number
  loading?: boolean
  disabled?: boolean,
  onClick?: () => void
}

const ButtonStyled = styled.button<ButtonProps>`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  outline: none;
  cursor: pointer;
  transition: .2s;
  text-transform: uppercase;
  width: max-content;
  padding: 10px 25px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className,
  active,
  type,
  width,
  loading,
  disabled,
  onClick,
}) => {

  if(href?.includes('#')) {
    return (
      <a href={href}>
        <ButtonStyled
          aria-pressed={active}
          className={className}
          disabled={disabled}
          width={width}
          type={type}
          loading={loading}
          href={href}
          onClick={onClick}
        >
          {children}
        </ButtonStyled>
      </a>
    )
  }
  return (
    <ButtonStyled
      aria-pressed={active}
      className={className}
      disabled={disabled}
      width={width}
      type={type}
      loading={loading}
      href={href}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  )
}

export default Button
