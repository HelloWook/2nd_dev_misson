import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import PostGruop from '@/components/molecule/PostGruop/PostGruop'
import TicketCard from '@/components/molecule/TicketCard/TicketCard'
import React from 'react'

interface Post {
  postTitle: string
  postSummary: string
}

interface PostGruopStyleProps {
  postGruop?: Post[]
}

const BestPerformance = ({ postGruop = [] }: PostGruopStyleProps) => {
  return (
    <div>
      <Subtitle isCenter={true}>베스트 공연</Subtitle>
      <Margin bottom={81} />
      <PostGruop postGruop={postGruop} />
      <Margin bottom={150} />
    </div>
  )
}

export default BestPerformance
