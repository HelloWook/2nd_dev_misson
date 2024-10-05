import React, { useEffect, useState } from 'react'
import { RecommendPerformance } from '@/types/types'
import { getRecommedPerformance } from '@/api/services/performance'

const useGetRecommedPerformance = () => {
  const [recommedPerformance, setPerformances] = useState<RecommendPerformance[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const response = await getRecommedPerformance()
        setPerformances(response)
      } catch (err) {
        console.error('데이터를 불러오는데 실패했습니다.', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPerformance()
  }, [])

  return { recommedPerformance, isLoading }
}

export default useGetRecommedPerformance
