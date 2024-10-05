import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import Filter from '@/components/molecule/Filter/Filter'
import SearchPostGroup from '@/components/molecule/SearchPostGroup/SearchPostGroup'
import React from 'react'
import styled from 'styled-components'
import { Performance } from '@/types/types'

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

interface SearchResultSectionProps {
  posts: Performance[]
  changeGenre: (param: string) => void
  changeSale: (param: string) => void
  changedate: (param: string) => void
  command: string
  loadMore: () => void
}

const SearchResultSection = ({
  command,
  posts = [],
  changeGenre,
  changeSale,
  changedate,
  loadMore,
}: SearchResultSectionProps) => {
  return (
    <SearchResultSectionStyle>
      <Subtitle>{`${command} 검색 결과`}</Subtitle>
      <Margin bottom={20} />
      <SearchResultSpanStyle>{`${command} 검색 결과를 확인해보세요`}</SearchResultSpanStyle>
      <Margin bottom={70} />
      <SectionStyle>
        <Filter changeGenre={changeGenre} changeSale={changeSale} changedate={changedate} />
        <SearchPostGroup posts={posts} loadMore={loadMore} />
      </SectionStyle>
    </SearchResultSectionStyle>
  )
}

export default SearchResultSection
