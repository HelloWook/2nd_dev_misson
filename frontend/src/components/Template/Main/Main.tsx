import React from 'react'
import styled from 'styled-components'
import Banner from '@/components/atoms/Banner/Banner'
import Header from '@/components/common/Header/Header'
import BannerSlider from '@/components/molecule/BannerSlider/BannerSlider'
import BestPerformance from '@/components/common/BestPerformanceSection/BestPerformance'
import EventRecommendation from '@/components/common/EventRecommendation/EventRecommendation'
import Margin from '@/components/atoms/Margin/Margin'
import TicketSection from '@/components/common/TicketSection/TicketSection'
import Footer from '@/components/common/Footer/Footer'

const MainStlye = styled.div`
  max-width: 1440px;
  margin: auto;
`
interface MainProps {
  clickEvent?: () => void
  PerformancPost: Post[]
  RecommendPost: string[]
  TickPost: string[]
}

interface Post {
  postTitle: string
  postSummary: string
}

const Main = ({ clickEvent, PerformancPost, RecommendPost, TickPost }: MainProps) => {
  return (
    <MainStlye>
      <Header />
      <BannerSlider />
      <BestPerformance postGruop={PerformancPost} />
      <TicketSection imgList={TickPost} />
      <Banner />
      <Margin bottom={134} />
      <EventRecommendation ClcikEvent={clickEvent} imgList={RecommendPost} />
      <Footer />
    </MainStlye>
  )
}

export default Main
