import * as React from 'react'
import styled from 'styled-components'

const TextareaStyled = styled.div<TextareaStyledType>`
  width: 100%;
  display: grid;
  grid-template-rows: max-content 1fr;

  label {
    font-size: 14px;
    color: ${({ error, theme }) => error ? theme.colors.error : theme.colors.label};
  }

  textarea {
    width: 100%;
    height: 100%;
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

type TextareaStyledType = {
  error?: any
}
interface FormikTextareaType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  form: any
  label: string
}

const Textarea: React.FC<FormikTextareaType> = ({ children, form, label, className, ...props }) => {
  const { name } = props
  const error = form.errors[name]
  return (
    <TextareaStyled error={error ?? false} className={className}>
      <label htmlFor={name}>{`${label} ${error ?? false ? `- ${error}` : ""}`}</label>
      <textarea
        onChange={form.handleChange}
        value={form.values[name]}
        { ...props }
      >
        {children}
      </textarea>
    </TextareaStyled>
  )
}

export default Textarea