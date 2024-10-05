import React from 'react'
import Margin from '@/components/atoms/Margin/Margin'
import Title from '@/components/atoms/Title/Title'
import RecommendSlider from '@/components/molecule/RecommedSlider/RecommendSlider'
import styled from 'styled-components'
import { Performance } from '@/types/types'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'

interface RecommendSectionProps {
  firstGenrePerfomance: Performance[]
  secondGenrePerfomance: Performance[]
  thirdGenrePerfomance: Performance[]
  firstGenre: string
  secondGenre: string
  thirdGenre: string
}

const RecommendSectionStlye = styled.div`
  width: 1800px;
  margin: auto;
`
const SectionStyle = styled.div`
  text-align: center;
`

const RecommendSection = ({
  firstGenrePerfomance,
  secondGenrePerfomance,
  thirdGenrePerfomance,
  firstGenre,
  secondGenre,
  thirdGenre,
}: RecommendSectionProps) => {
  return (
    <RecommendSectionStlye>
      <Margin bottom={90} />
      <Subtitle>{'추천 목록'}</Subtitle>
      <Margin bottom={90} />
      <SectionStyle>
        <Title>{firstGenre}</Title>
        <Margin bottom={60} />
        <RecommendSlider Perfomance={firstGenrePerfomance} />
        <Margin bottom={60} />
      </SectionStyle>
      <SectionStyle>
        <Title>{secondGenre}</Title>
        <Margin bottom={60} />
        <RecommendSlider Perfomance={secondGenrePerfomance} />
        <Margin bottom={60} />
      </SectionStyle>
      <SectionStyle>
        <Title>{thirdGenre}</Title>
        <Margin bottom={60} />
        <RecommendSlider Perfomance={thirdGenrePerfomance} />
        <Margin bottom={60} />
      </SectionStyle>
    </RecommendSectionStlye>
  )
}

export default RecommendSection
