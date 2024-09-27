import React from 'react'
import styled from 'styled-components'
import Image from '@/components/atoms/Image/Image'

interface SliderPostProps {
  SliderPostTitle: string
  SliderPostLocation: string
  SliderPostDate: string
  width?: string
}

const SliderPostStyle = styled.div<{ width?: string }>`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
`

const SliderPostItemStyle = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
`

const SliderPostTitleStyle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
`

const SliderPostLocationDate = styled.span`
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
`

const SliderPostDateStyle = styled.span`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`
const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const SliderPost = ({ SliderPostTitle, SliderPostLocation, SliderPostDate, width = '190' }: SliderPostProps) => {
  return (
    <SliderPostStyle width={width}>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <SliderPostItemStyle>
        <SliderPostTitleStyle>{SliderPostTitle}</SliderPostTitleStyle>
        <SliderPostLocationDate>{SliderPostLocation}</SliderPostLocationDate>
        <SliderPostDateStyle>{SliderPostDate}</SliderPostDateStyle>
      </SliderPostItemStyle>
    </SliderPostStyle>
  )
}

export default SliderPost
