import Link from '@/components/atoms/Link/Link'
import Margin from '@/components/atoms/Margin/Margin'
import SearchPost from '@/components/molecule/SearchPost/SearchPost'
import React from 'react'
import styled from 'styled-components'

const SearchPostGroupStyle = styled.div`
  width: 800px;
  height: 980px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SearchPostsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
`
interface SearchPostProps {
  SearchPostTitle: string
  SearchPostLocation: string
  SearchPostDate: string
  width?: string
}

interface SearchPostGroupProps {
  posts: SearchPostProps[]
  herf: string
}

const SearchPostGroup = ({ posts = [], herf }: SearchPostGroupProps) => {
  return (
    <SearchPostGroupStyle>
      <SearchPostsStyle>
        {posts.map((val, idx) => (
          <SearchPost
            key={idx}
            SearchPostTitle={val.SearchPostTitle}
            SearchPostLocation={val.SearchPostLocation}
            SearchPostDate={val.SearchPostDate}
          ></SearchPost>
        ))}
      </SearchPostsStyle>
      <Margin bottom={30} />
      <Link href={herf}>더보기</Link>
    </SearchPostGroupStyle>
  )
}

export default SearchPostGroup
