import React from 'react'
import styled from 'styled-components'
import Banner from '@/components/atoms/Banner/Banner'
import BannerSlider from '@/components/molecule/BannerSlider/BannerSlider'
import BestPerformance from '@/components/common/BestPerformanceSection/BestPerformance'
import EventRecommendation from '@/components/common/EventRecommendation/EventRecommendation'
import Margin from '@/components/atoms/Margin/Margin'
import TicketSection from '@/components/common/TicketSection/TicketSection'
import { Performance } from '@/types/types'

const MainStlye = styled.div`
  max-width: 1440px;
  margin: auto;
`
interface MainProps {
  clickEvent: (param: string) => void
  PerformancPost: Performance[]
  RecommendPost: Performance[]
  TickPost: Performance[]
}

const Main = ({ clickEvent, PerformancPost, RecommendPost, TickPost }: MainProps) => {
  return (
    <React.Fragment>
      <MainStlye>
        <BannerSlider postGruop={PerformancPost} />
        <BestPerformance postGruop={PerformancPost} />
        <TicketSection ticket={TickPost} />
        <Banner />
        <Margin bottom={134} />
        <EventRecommendation clcikEvent={clickEvent} genrePost={RecommendPost} />
      </MainStlye>
    </React.Fragment>
  )
}

export default Main
