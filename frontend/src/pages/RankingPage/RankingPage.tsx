import Ranking from '@/components/Template/Ranking/Ranking'
import useGetBoxOffice from '@/hooks/useGetBoxOffice'
import React from 'react'

const RankingPage = () => {
  const { boxOffice, isLoading } = useGetBoxOffice({ dateTtype: 'month' })
  return (
    <div>
      <Ranking boxoffieces={boxOffice}></Ranking>
    </div>
  )
}

export default RankingPage
