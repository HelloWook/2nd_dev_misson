import React from 'react'
import Post from '@/components/molecule/Post/Post'
import styled from 'styled-components'
import { Performance } from '@/types/types'
import { Link } from 'react-router-dom'

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
      {postGruop.map((val) => (
        <Link to={`/detail/${val.mt20id}`} key={val.mt20id}>
          <Post postTitle={val.prfnm} postSummary={`${val.prfpdfrom} ~ ${val.prfpdto} ${val.prfnm}`} src={val.poster} />
        </Link>
      ))}
    </PostGruopStyle>
  )
}

export default PostGruop
