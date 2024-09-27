import React, { ReactNode } from 'react'
import styled from 'styled-components'

const SubtitlteStyle = styled.h2<SubtitleProps>`
  text-align: ${(props) => (props.isCenter ? 'center' : undefined)};
  font-size: 40px;
  font-weight: bold;
`

interface SubtitleProps {
  children: ReactNode
  isCenter?: boolean
}

const Subtitle = ({ children, isCenter = true }: SubtitleProps) => {
  return <SubtitlteStyle isCenter={isCenter}>{children}</SubtitlteStyle>
}

export default Subtitle
