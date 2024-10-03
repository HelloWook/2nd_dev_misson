import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import ButtonGroup from '@/components/molecule/ButtonGroup/ButtonGroup'
import CardGroup from '@/components/molecule/CardGroup/CardGruop'
import React from 'react'
import { Performance } from '@/types/types'

interface EventRecommendationProps {
  clcikEvent: (param: string) => void
  genrePost?: Performance[]
}

const EventRecommendation = ({ clcikEvent, genrePost }: EventRecommendationProps) => {
  return (
    <div>
      <Subtitle>장르별 추천 공연</Subtitle>
      <Margin bottom={49} />
      <ButtonGroup clickEvent={clcikEvent} />
      <Margin bottom={45} />
      <CardGroup genrePost={genrePost} />
      <Margin bottom={125} />
    </div>
  )
}

export default EventRecommendation
