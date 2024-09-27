import { Height } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

interface BannerProps {
  height?: number
}

const BannerStyle = styled.img<BannerProps>`
  width: 100%;
  height: ${({ height }) => height}px;
`

const Banner = ({ height = 409 }: BannerProps) => {
  return <BannerStyle src="/Asset/Banner.png" height={height} />
}

export default Banner
