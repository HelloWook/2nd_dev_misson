import Image from '@/components/atoms/Image/Image'
import React from 'react'
import styled from 'styled-components'

interface SearchPostProps {
  SearchPostTitle: string
  SearchPostLocation: string
  SearchPostDate: string
  width?: string
  variant?: 'primary' | 'secondary'
  imageSrc?: string
}

const SearchPostStyle = styled.div<{ width: string }>`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  height: 290px;
  text-align: left;
`

const SearchPostItemStyle = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
`

const SearchPostTitleStyle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const SearchPostLocationDate = styled.span`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const SearchPostDateStyle = styled.span<{ variant: 'primary' | 'secondary' }>`
  font-size: ${({ variant }) => (variant === 'primary' ? '16px' : '14px')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`

const SearchPost = ({
  SearchPostTitle,
  SearchPostLocation,
  SearchPostDate,
  width = '200px',
  variant = 'primary',
  imageSrc,
}: SearchPostProps) => {
  return (
    <SearchPostStyle width={width}>
      <ImageWrapper>
        <Image src={imageSrc} />
      </ImageWrapper>
      <SearchPostItemStyle>
        <SearchPostTitleStyle>{SearchPostTitle}</SearchPostTitleStyle>
        <SearchPostLocationDate>{SearchPostLocation}</SearchPostLocationDate>
        <SearchPostDateStyle variant={variant}>{SearchPostDate}</SearchPostDateStyle>
      </SearchPostItemStyle>
    </SearchPostStyle>
  )
}

export default SearchPost
