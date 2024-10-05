import { getDetailPerformance } from '@/api/services/performance'
import { PerformanceDetail } from '@/types/types'
import React, { useEffect, useState } from 'react'

/**
 * @param postId 게시물 id를 가져온다
 */

interface useGetDetailPerfromanceParams {
  postId: string
}

const useGetDetailPerfromance = ({ postId }: useGetDetailPerfromanceParams) => {
  const [detailPerformace, setDetailPerformace] = useState<PerformanceDetail | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const response = await getDetailPerformance({ postId })
        setDetailPerformace(response)
      } catch (err) {
        console.error('데이터를 불러오는데 실패했습니다.', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPerformance()
  }, [postId])

  return { detailPerformace, isLoading }
}

export default useGetDetailPerfromance
