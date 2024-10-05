import { CommentInfo } from '@/types/types'
import React, { useEffect, useState } from 'react'

interface useCommentParams {
  postId: string
}

const useComment = ({ postId }: useCommentParams) => {
  const localStorageKey = `comments ${postId}`

  // 초기 상태를 로컬 스토리지에서 불러옴
  const [comments, setComments] = useState<CommentInfo[]>(() => {
    const savedComments = localStorage.getItem(localStorageKey)
    return savedComments ? JSON.parse(savedComments) : []
  })

  // 댓글 추가 함수
  const postComment = (rating: number, comment: string) => {
    const newComments = [
      ...comments,
      {
        id: postId,
        user: `익명 ${comments.length + 1}`,
        rating,
        comment,
      },
    ]
    setComments(newComments)
  }

  // 상태가 변경될 때 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(comments))
  }, [comments])

  return { comments, postComment }
}

export default useComment
