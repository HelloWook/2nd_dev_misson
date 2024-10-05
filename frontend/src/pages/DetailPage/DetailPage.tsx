import Loading from '@/components/atoms/Loading/Loading'
import Detail from '@/components/Template/Detail/Detail'
import useComment from '@/hooks/useComment'
import useGetDetailPerfromance from '@/hooks/useGetDetailPerfromance'
import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const { postId } = useParams<{ postId: string }>()
  const { detailPerformace, isLoading } = useGetDetailPerfromance({ postId: postId as string })
  const { comments, postComment } = useComment({ postId: postId as string })

  if (isLoading) {
    return <Loading />
  }

  if (!detailPerformace) {
    return <div>Error: No performance data available</div>
  }

  return (
    <div>
      <Detail {...detailPerformace} comments={comments} onClick={postComment} />
    </div>
  )
}

export default DetailPage
