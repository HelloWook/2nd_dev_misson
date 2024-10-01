import React from 'react'
import Margin from '@/components/atoms/Margin/Margin'
import Title from '@/components/atoms/Title/Title'
import RecommendSlider from '@/components/molecule/RecommedSlider/RecommendSlider'
import styled from 'styled-components'

interface postInfo {
  SearchPostTitle: string
  SearchPostLocation: string
  SearchPostDate: string
}

interface recommend {
  title: string
  posts: postInfo[]
}

interface RecommendSectionProps {
  recommends: recommend[]
}

const RecommendSectionStlye = styled.div`
  width: 1200px;
  margin: auto;
`

const RecommendSection = ({ recommends = [] }: RecommendSectionProps) => {
  return (
    <RecommendSectionStlye>
      {recommends.map((recommend, idx) => (
        <div key={idx}>
          <Title>{recommend.title}</Title>
          <Margin bottom={60} />
          <RecommendSlider posts={recommend.posts} />
          <Margin bottom={60} />
        </div>
      ))}
    </RecommendSectionStlye>
  )
}

export default RecommendSection
