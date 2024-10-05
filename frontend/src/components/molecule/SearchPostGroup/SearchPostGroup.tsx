import Margin from '@/components/atoms/Margin/Margin'
import SearchPost from '@/components/molecule/SearchPost/SearchPost'
import React from 'react'
import styled from 'styled-components'
import { Performance } from '@/types/types'
import Anchor from '@/components/atoms/Link/Anchor'
import { Link } from 'react-router-dom'
import Button from '@/components/atoms/Button/Button'

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
            ></SearchPost>
          </Link>
        ))}
      </SearchPostsStyle>
      <Margin bottom={30} />
      <Button ButtonSummary="더보기" variant="third" height={70} clickEvent={loadMore} />
    </SearchPostGroupStyle>
  )
}

export default SearchPostGroup
