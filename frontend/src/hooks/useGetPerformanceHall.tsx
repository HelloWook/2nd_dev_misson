import React, { useEffect, useState } from 'react'
import { PerformanceHall } from '@/types/types'
import { getPerformanceHall } from '@/api/services/performance'
/**
 * 공연장 정보를 불러옵니다
 */
const useGetPerformanceHall = () => {
  const [performanceHall, setPeformanceHall] = useState<PerformanceHall[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchperformanceHall = async () => {
      try {
        const response = await getPerformanceHall()
        setPeformanceHall(response)
      } catch (err) {
        console.error('데이터를 불러오는데 실패했습니다.', err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchperformanceHall()
  }, [])

  return { performanceHall }
}

export default useGetPerformanceHall
