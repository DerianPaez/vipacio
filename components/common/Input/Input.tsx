import { type } from 'os'
import * as React from 'react'
import styled from 'styled-components'

const InputStyled = styled.div<InputStyledType>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  label {
    font-size: 14px;
    color: ${({ error, theme }) => error ? theme.colors.error : theme.colors.label};
  }

  input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    border-bottom: 1px solid ${({ error, theme }) => error ? theme.colors.error : theme.colors.black};
    color: ${({ theme }) => theme.colors.black};
    outline: none;
    ::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }
`

type InputStyledType = {
  error?: any
}

interface FormikInputType extends React.InputHTMLAttributes<HTMLInputElement> {
  form: any
  name: string
  label: string
}

const Input: React.FC<FormikInputType> = ({ form, label, className, ...props }) => {
  const { name } = props
  const error = form.errors[name]

  return (
    <InputStyled error={error ?? false} className={className}>
      <label htmlFor={name}>{`${label} ${error ?? false ? `- ${error}` : ""}`}</label>
      <input
        onChange={form.handleChange}
        value={form.values[name]}
        { ...props }
      />
    </InputStyled>
  )
}

export default Input