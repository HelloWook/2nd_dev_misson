import { getBoxOffice } from '@/api/services/performance'
import { BoxOffice } from './../types/types'
import React, { useEffect, useState } from 'react'
import getDate from '@/util/getDate'

type dateType = 'day' | 'week' | 'month'

interface useGetBoxOfficeParams {
  dateTtype: dateType
}

const now = new Date()
const currentDate = getDate(now)

/**
 *
 * @param dateTtype 일,주,달 기준으로 아이템을 가져온다
 * @returns
 */
const useGetBoxOffice = ({ dateTtype }: useGetBoxOfficeParams) => {
  const [boxOffice, setBoxOffice] = useState<BoxOffice[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dateTtypeState, setTtypeState] = useState<dateType>(dateTtype)

  useEffect(() => {
    const fetchBoxOffice = async () => {
      try {
        const response = await getBoxOffice({ date: currentDate, dateTtype: dateTtypeState })
        setBoxOffice(response)
      } catch (err) {
        console.error('데이터를 불러오는데 실패했습니다.', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBoxOffice()
  }, [dateTtypeState])

  function changeDate(date: dateType) {
    setTtypeState(date)
  }

  return { boxOffice, isLoading, changeDate }
}

export default useGetBoxOffice
