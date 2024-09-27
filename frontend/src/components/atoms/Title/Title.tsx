import React, { ReactNode } from 'react'
import styled from 'styled-components'

const TitleStyle = styled.h1`
  font-size: 48px;
  font-weight: bold;
`

interface TitleProps {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <TitleStyle>{children}</TitleStyle>
}

export default Title
