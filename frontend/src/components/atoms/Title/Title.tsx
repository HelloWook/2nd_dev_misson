import React, { ReactNode } from 'react'
import styled from 'styled-components'

const TitleStyle = styled.h3`
  font-size: 32px;
  font-weight: bold;
`

interface TitleProps {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <TitleStyle>{children}</TitleStyle>
}

export default Title
