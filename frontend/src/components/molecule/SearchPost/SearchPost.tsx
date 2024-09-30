import React from 'react'
import styled from 'styled-components'
import Image from '@/components/atoms/Image/Image'

interface SearchPostProps {
  SearchPostTitle: string
  SearchPostLocation: string
  SearchPostDate: string
  width?: string
}

const SearchPostStyle = styled.div<{ width?: string }>`
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
  height: 290px;
`

const SearchPostItemStyle = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
`

const SearchPostTitleStyle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
`

const SearchPostLocationDate = styled.span`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const SearchPostDateStyle = styled.span`
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
/**
 *
 * @param SearchPostTitle 타이틀
 * @param SearchPostLocation 공연 위치
 * @param SearchPostDate 날짜
 * @returns
 */
const SearchPost = ({ SearchPostTitle, SearchPostLocation, SearchPostDate, width = '230' }: SearchPostProps) => {
  return (
    <SearchPostStyle width={width}>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <SearchPostItemStyle>
        <SearchPostTitleStyle>{SearchPostTitle}</SearchPostTitleStyle>
        <SearchPostLocationDate>{SearchPostLocation}</SearchPostLocationDate>
        <SearchPostDateStyle>{SearchPostDate}</SearchPostDateStyle>
      </SearchPostItemStyle>
    </SearchPostStyle>
  )
}

export default SearchPost
