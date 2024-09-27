import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import ButtonGroup from '@/components/molecule/ButtonGroup/ButtonGroup'
import CardGroup from '@/components/molecule/CardGroup/CardGruop'
import React from 'react'

interface EventRecommendationProps {
  ClcikEvent?: () => void
  imgList?: string[]
}

const EventRecommendation = ({ ClcikEvent, imgList }: EventRecommendationProps) => {
  return (
    <div>
      <Subtitle isCenter={true}>장르별 추천 공연</Subtitle>
      <Margin bottom={49} />
      <ButtonGroup clickEvent={ClcikEvent} />
      <Margin bottom={45} />
      <CardGroup imgList={imgList} />
      <Margin bottom={125} />
    </div>
  )
}

export default EventRecommendation
