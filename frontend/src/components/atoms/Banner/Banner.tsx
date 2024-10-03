import { Height } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import bannerIamge from '@/assets/Banner2.png'

interface BannerProps {
  height?: number
  src?: string
}

const BannerStyle = styled.img<BannerProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  object-fit: cover;
`

const Banner = ({ height = 409, src = bannerIamge }: BannerProps) => {
  return <BannerStyle src={src} height={height} alt="배너 이미지" />
}

export default Banner
