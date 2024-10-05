import Loading from '@/components/atoms/Loading/Loading'
import Ranking from '@/components/Template/Ranking/Ranking'
import useGetBoxOffice from '@/hooks/useGetBoxOffice'
import React from 'react'

const RankingPage = () => {
  const { boxOffice, isLoading, changeDate } = useGetBoxOffice({ dateTtype: 'month' })
  return (
    <div>
      {isLoading && <Loading></Loading>}
      <Ranking boxoffieces={boxOffice} clickDateTypeEvent={changeDate}></Ranking>
    </div>
  )
}

export default RankingPage
