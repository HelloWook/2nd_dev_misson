import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface AnchorProps {
  children: ReactNode
  href: string
  padding?: string
  variant?: 'primary' | 'secondary'
}

const AnchorStyle = styled.a<AnchorProps>`
  display: block;
  border: 1px solid black;
  padding: 15px ${(props) => (props.padding !== undefined ? `${props.padding}px` : '181px')};
  text-decoration: none;
  border-radius: 15px;
  font-size: 24px;
  color: ${(props) => (props.variant === 'primary' ? 'white' : 'black')};
  background-color: ${(props) => (props.variant === 'primary' ? '#8e43e7' : 'white')};
  border: ${(props) => (props.variant === 'primary' ? 'none' : '1px solid #8e43e7')};
  width: 100%;
  text-align: center;
`

const Anchor = ({ children, href, padding, variant = 'primary' }: AnchorProps) => {
  return (
    <AnchorStyle href={href} padding={padding} variant={variant}>
      {children}
    </AnchorStyle>
  )
}

export default Anchor
