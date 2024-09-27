import React from 'react'
import styled from 'styled-components'
import Image from '@/components/atoms/Image/Image'

interface PostProps {
  postTitle: string
  postSummary: string
  width?: string
}

const PostStyle = styled.div<{ width?: string }>`
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: ${({ width }) => width}px;
  display: flex;
  flex-direction: column;
`

const PostItemStyle = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const PostTitleStyle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`

const PostSummaryStyle = styled.span`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Post = ({ postTitle, postSummary, width = '340' }: PostProps) => {
  return (
    <PostStyle width={width}>
      <ImageWrapper>
        <Image />
      </ImageWrapper>
      <PostItemStyle>
        <PostTitleStyle>{postTitle}</PostTitleStyle>
        <PostSummaryStyle>{postSummary}</PostSummaryStyle>
      </PostItemStyle>
    </PostStyle>
  )
}

export default Post
