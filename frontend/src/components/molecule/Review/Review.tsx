import Button from '@/components/atoms/Button/Button'
import Margin from '@/components/atoms/Margin/Margin'

import React, { useState } from 'react'
import styled from 'styled-components'

const ReviewTitleStyle = styled.h3`
  font-size: 32px;
  font-weight: bold;
  margin-left: 5px;
  margin-top: 30px;
`

const StarRatingStyle = styled.div`
  display: flex;
`
const ReviewFormStyle = styled.form``

const ReviewStarFormStyle = styled.div`
  width: 792px;
  display: flex;
  justify-content: space-between;
`

const ReviewInputStlye = styled.input`
  width: 790px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 12px;
  height: 100px;
  margin-left: 5px;
`

const Star = styled.input`
  appearance: none;

  &::after {
    content: '☆';
    color: hsl(55.02183406113537, 93%, 51%);
    font-size: 30px;
  }

  &:hover::after,
  &:has(~ &:hover)::after,
  &:checked::after,
  &:has(~ &:checked)::after {
    content: '★';
  }

  &:hover ~ .star::after {
    content: '☆';
  }
`

const ReviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const Review = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null)

  const handleStarClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    setSelectedValue(value)
  }

  return (
    <ReviewStyle>
      <div>
        <ReviewTitleStyle>관람 리뷰</ReviewTitleStyle>
        <Margin bottom={10} />
        <ReviewFormStyle>
          <ReviewStarFormStyle>
            <StarRatingStyle>
              {[1, 2, 3, 4, 5].map((value) => (
                <Star
                  key={value}
                  type="radio"
                  value={value}
                  checked={selectedValue === value}
                  onChange={handleStarClick}
                />
              ))}
            </StarRatingStyle>
            <Button width={180} height={48} ButtonSummary={'리뷰 작성하기'} />
          </ReviewStarFormStyle>
          <Margin bottom={30} />
          <ReviewInputStlye placeholder="리뷰를 작성해주세요 " />
        </ReviewFormStyle>
      </div>
    </ReviewStyle>
  )
}

export default Review
