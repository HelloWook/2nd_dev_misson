import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import PostGruop from '@/components/molecule/PostGruop/PostGruop'
import React from 'react'
import { Performance } from '@/types/types'

interface PostGruopStyleProps {
  postGruop?: Performance[]
}

const BestPerformance = ({ postGruop = [] }: PostGruopStyleProps) => {
  return (
    <div>
      <Subtitle>베스트 공연</Subtitle>
      <Margin bottom={81} />
      <PostGruop postGruop={postGruop} />
      <Margin bottom={150} />
    </div>
  )
}

export default BestPerformance
