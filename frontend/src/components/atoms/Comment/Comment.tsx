import React from 'react'
import styled from 'styled-components'
import Margin from '../Margin/Margin'

const CommentStyle = styled.div`
  background-color: #f2f4f8;
  flex-grow: 1;
  height: 152px;
  padding: 16px;
  margin: 0px 20px;
`

const CommentHeder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const UserTitleStyle = styled.h3`
  font-weight: 700;
`

const UserStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const StarContainer = styled.div`
  display: flex;
  gap: 2px;
`

const StarStyle = styled.p`
  appearance: none;
  &::after {
    content: '★';
    color: hsl(55.02183406113537, 93%, 51%);
    font-size: 20px;
  }
`

const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
`
const CommentsContentStlye = styled.p`
  font-size: 16px;
`

interface CommentUser {
  user: string
  rating: number
  comment: string
}

/**
 *
 * @param user 사용자명
 * @param user 별점
 * @param user 댓글 내용
 * @returns JSX.Element
 */
const Comment = ({ user, rating, comment }: CommentUser) => {
  return (
    <CommentStyle>
      <CommentHeder>
        <UserStyle>
          <Circle />
          <UserTitleStyle>{user}</UserTitleStyle>
        </UserStyle>
        <StarContainer>
          {Array.from({ length: rating }, (_, index) => (
            <StarStyle key={index} />
          ))}
        </StarContainer>
      </CommentHeder>
      <CommentsContentStlye>{comment}</CommentsContentStlye>
    </CommentStyle>
  )
}

export default Comment
