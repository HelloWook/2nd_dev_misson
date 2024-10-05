import React, { useEffect } from 'react'
import Main from '@/components/Template/Main/Main'
import useGetPerformance from '@/hooks/useGetPerfromance'
import Loading from '@/components/atoms/Loading/Loading'

const MainPage = () => {
  // 베스트 공연을 불러온다.
  const { Performances: performancesList, isLoading } = useGetPerformance({ rows: 4 })

  // 오픈런 공연 목록을 가져온다.
  const { Performances: openRunPerformacesList } = useGetPerformance({ openRun: 'Y', rows: 2 })

  // 장르별 추천 공연을 가져온다.
  const { Performances: genrePerformacesList, changeGenre } = useGetPerformance({
    eddate: '20241231',
    rows: 4,
  })

  return (
    <div>
      {isLoading && <Loading></Loading>}
      <Main
        PerformancPost={performancesList}
        TickPost={openRunPerformacesList}
        RecommendPost={genrePerformacesList}
        clickEvent={changeGenre}
      ></Main>
    </div>
  )
}

export default MainPage
