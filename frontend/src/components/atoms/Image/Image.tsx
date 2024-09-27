import React from 'react'
import styled from 'styled-components'
const TestUrl: string = 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426'

const IamgeStyle = styled.img<ImageProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ radius }) => radius}px;
  object-fit: cover;
  flex-grow: 1;
`

interface ImageProps {
  width?: number
  height?: number
  radius?: number
  src?: string
}

const Image = ({ width = 340, height = 340, radius = 0, src = TestUrl }: ImageProps) => {
  return <IamgeStyle width={width} height={height} radius={radius} src={src} />
}

export default Image
