import React from 'react'
import styled from 'styled-components'

interface LogoProps {
  width?: number | string
  height?: number | string
}

const Logostyled = styled.h1``

const LogoImage = styled.img<LogoProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`

const Logo = ({ width = 147, height = 39 }: LogoProps) => {
  return (
    <Logostyled>
      <LogoImage src={'/Asset/logo2.png'} width={width} height={height} alt="로고 이미지" />
    </Logostyled>
  )
}

export default Logo
