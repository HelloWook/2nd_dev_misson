import Margin from '@/components/atoms/Margin/Margin'
import SearchPost from '@/components/molecule/SearchPost/SearchPost'
import React from 'react'
import styled from 'styled-components'
import { Performance } from '@/types/types'
import Anchor from '@/components/atoms/Link/Anchor'
import { Link } from 'react-router-dom'
import Button from '@/components/atoms/Button/Button'

const SearchPostGroupStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SearchPostsStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 880px;
`

interface SearchPostGroupProps {
  posts: Performance[]
  loadMore: () => void
}

const SearchPostGroup = ({ posts = [], loadMore }: SearchPostGroupProps) => {
  return (
    <SearchPostGroupStyle>
      <SearchPostsStyle>
        {posts.map((val, idx) => (
          <Link to={`/detail/${val.mt20id}`} key={idx}>
            <SearchPost
              SearchPostTitle={val.prfnm}
              SearchPostLocation={val.fcltynm}
              SearchPostDate={val.prfstate}
              imageSrc={val.poster}
              width="280"
            ></SearchPost>
          </Link>
        ))}
      </SearchPostsStyle>
      <Margin bottom={30} />
      {posts.length !== 0 && (
        <Button ButtonSummary="더보기" variant="third" height={60} clickEvent={loadMore} width={880} />
      )}
      <Margin bottom={30} />
    </SearchPostGroupStyle>
  )
}

export default SearchPostGroup
