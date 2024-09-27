import CommentSlider from '@/components/molecule/CommentSlider/CommentSlider'
import Review from '@/components/molecule/Review/Review'
import React from 'react'
import styled from 'styled-components'

interface CommentInfo {
  user: string
  rating: number
  comment: string
}

interface ReviewSectionProps {
  comments: CommentInfo[]
}

const ReviewSectionStyle = styled.div`
  width: 100%;
  margin: auto;
`

const ReviewSection = ({ comments }: ReviewSectionProps) => {
  return (
    <ReviewSectionStyle>
      <Review />
      <CommentSlider comments={comments} />
    </ReviewSectionStyle>
  )
}

export default ReviewSection
