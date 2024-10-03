import { getPerformance } from '@/api/services/performance'
import getDate from '@/util/getDate'
import { useEffect, useState } from 'react'
import { Performance } from '@/types/types'
import useGenre from '@/hooks/useGenre'

const now = new Date()

interface useGetPerformanceParams {
  stdate?: string
  eddate?: string
  openRun?: string
  rows?: number
  genre?: string
}

// 현재 날짜
const currentDate = getDate(now)

// 일주일 뒤 날짜
const oneWeekLater = new Date(now)
oneWeekLater.setDate(now.getDate() + 7)
const dateWeekLater = getDate(oneWeekLater)

/**
 * 공연 정보를 가져오는 커스텀 훅
 * @param stdate 시작 날짜
 * @param eddate 종료 날짜
 * @param openRun 오픈런 유무
 * @param rows 보여줄 데이터 개수
 */
const useGetPerformance = ({
  stdate = currentDate,
  eddate = dateWeekLater,
  openRun = '',
  rows = 10,
}: useGetPerformanceParams) => {
  const [Performances, setPerformances] = useState<Performance[]>([])

  // 장르 상태를 관리하는 훅 호출
  const { genre, changeGenre } = useGenre()

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const response = await getPerformance({ stdate, eddate, openRun, rows, genre })
        console.log(response)
        setPerformances(response)
      } catch (err) {
        console.error('데이터를 불러오는데 실패했습니다.', err)
      }
    }

    fetchPerformance()
  }, [stdate, eddate, genre])

  return { Performances, changeGenre }
}

export default useGetPerformance
