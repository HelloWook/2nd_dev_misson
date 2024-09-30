import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface LinkProps {
  children: ReactNode
  href: string
  padding?: string
}

const LinkStyle = styled.a<LinkProps>`
  display: block;
  border: 1px solid black;
  padding: 15px ${(props) => (props.padding !== undefined ? `${props.padding}px` : '181px')};
  text-decoration: none;
  border-radius: 15px;
  font-size: 24px;
  color: white;
  background-color: #8e43e7;
  border: none;
  width: 100%;
  text-align: center;
`

const Link = ({ children, href, padding }: LinkProps) => {
  return (
    <LinkStyle href={href} padding={padding}>
      {children}
    </LinkStyle>
  )
}

export default Link
