import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import Filter from '@/components/molecule/Filter/Filter'
import SearchPostGroup from '@/components/molecule/SearchPostGroup/SearchPostGroup'
import React from 'react'
import styled from 'styled-components'

const SearchResultSectionStyle = styled.div`
  text-align: center;
  width: 1200px;
  margin: auto;
`
const SearchResultSpanStyle = styled.span`
  font-size: 16px;
`
const SectionStyle = styled.div`
  display: flex;
  gap: 80px;
`

interface SearchPostProps {
  SearchPostTitle: string
  SearchPostLocation: string
  SearchPostDate: string
  width?: string
}

interface SearchResultSectionProps {
  posts: SearchPostProps[]
  herf: string
}

const SearchResultSection = ({ posts = [], herf = 'www.naver.com' }: SearchResultSectionProps) => {
  return (
    <SearchResultSectionStyle>
      <Subtitle>{'공연 검색 결과'}</Subtitle>
      <Margin bottom={20} />
      <SearchResultSpanStyle>‘공연’ 검색 결과를 확인해보세요</SearchResultSpanStyle>
      <Margin bottom={70} />
      <SectionStyle>
        <Filter />
        <SearchPostGroup posts={posts} herf={herf} />
      </SectionStyle>
    </SearchResultSectionStyle>
  )
}

export default SearchResultSection
