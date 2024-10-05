import CommentSlider from '@/components/molecule/CommentSlider/CommentSlider'
import Review from '@/components/molecule/Review/Review'
import React from 'react'
import styled from 'styled-components'
import { CommentInfo } from '@/types/types'

interface ReviewSectionProps {
  comments: CommentInfo[]
  onClick: (rating: number, comment: string) => void
}

const ReviewSectionStyle = styled.div`
  width: 100%;
  margin: auto;
`

const ReviewSection = ({ comments, onClick }: ReviewSectionProps) => {
  return (
    <ReviewSectionStyle>
      <Review onClick={onClick} />
      {comments.length > 0 ? <CommentSlider comments={comments} /> : ''}
    </ReviewSectionStyle>
  )
}

export default ReviewSection
