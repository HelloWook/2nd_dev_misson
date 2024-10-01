import React, { ReactNode } from 'react'
import styled from 'styled-components'

const SubtitleStyle = styled.h2<SubtitleProps>`
  text-align: ${({ $isCenter }) => ($isCenter ? 'center' : 'left')};
  font-size: 48px;
  font-weight: bold;
`

interface SubtitleProps {
  children: ReactNode
  $isCenter?: boolean
}

const Subtitle = ({ children, $isCenter = true }: SubtitleProps) => {
  return <SubtitleStyle $isCenter={$isCenter}>{children}</SubtitleStyle>
}

export default Subtitle
