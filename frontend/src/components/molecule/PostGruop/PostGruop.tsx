import React from 'react'
import Post from '@/components/molecule/Post/Post'
import styled from 'styled-components'

const PostGruopStyle = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
`
interface Post {
  postTitle: string
  postSummary: string
}

interface PostGruopStyleProps {
  postGruop?: Post[]
}
const PostGruop = ({ postGruop = [] }: PostGruopStyleProps) => {
  return (
    <PostGruopStyle>
      {postGruop.map((val, idx) => (
        <Post key={idx} postTitle={val.postTitle} postSummary={val.postSummary} />
      ))}
    </PostGruopStyle>
  )
}

export default PostGruop
