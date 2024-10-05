import { getPerformance } from '@/api/services/performance'
import getDate from '@/util/getDate'
import { useEffect, useState } from 'react'
import { Performance } from '@/types/types'
import useGenre from '@/hooks/useGenre'
import useSale from '@/hooks/useSale'
import useDate from './useDate'

const now = new Date()

interface useGetPerformanceParams {
  stdate?: string
  eddate?: string
  openRun?: string
  command?: string
  rows?: number
  genre?: string
  page?: number
}

const currentDate = getDate(now)

const oneMonthLater = new Date(now)
oneMonthLater.setDate(now.getDate() + 30)
const dateMonthLater = getDate(oneMonthLater)

const useGetPerformance = ({
  stdate = currentDate,
  eddate = dateMonthLater,
  openRun = '',
  command = '',
  rows = 10,
  page = 1,
}: useGetPerformanceParams) => {
  const [Performances, setPerformances] = useState<Performance[]>([])
  const [currentPage, setCurrentPage] = useState(page)
  const [isLoading, setIsLoading] = useState(false)

  const { genre, changeGenre } = useGenre()
  const { sale, changeSale } = useSale()
  const { date, changedate } = useDate()

  useEffect(() => {
    const fetchPerformance = async () => {
      setIsLoading(true)
      try {
        const response = await getPerformance({
          stdate,
          eddate,
          openRun,
          command,
          rows,
          genre,
          sale,
          page: currentPage,
        })

        if (currentPage > 1) {
          setPerformances((prevPerformances) => [...prevPerformances, ...response])
        } else {
          setPerformances(response)
        }
      } catch (err) {
        console.error('데이터를 불러오는데 실패했습니다.', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPerformance()
  }, [stdate, eddate, genre, sale, date, command, currentPage])

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  return { Performances, changeGenre, changeSale, changedate, loadMore, isLoading }
}

export default useGetPerformance
