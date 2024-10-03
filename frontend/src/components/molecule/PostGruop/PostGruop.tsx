import React from 'react'
import Post from '@/components/molecule/Post/Post'
import styled from 'styled-components'
import { Performance } from '@/types/types'

const PostGruopStyle = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
`

interface PostGruopStyleProps {
  postGruop?: Performance[]
}
const PostGruop = ({ postGruop = [] }: PostGruopStyleProps) => {
  return (
    <PostGruopStyle>
      {postGruop.map((val, idx) => (
        <Post
          key={val.mt20id}
          postTitle={val.prfnm}
          postSummary={`${val.prfpdfrom} ~ ${val.prfpdto} ${val.prfnm}`}
          src={val.poster}
        />
      ))}
    </PostGruopStyle>
  )
}

export default PostGruop
