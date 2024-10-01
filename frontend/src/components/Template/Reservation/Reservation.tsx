import Margin from '@/components/atoms/Margin/Margin'
import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'
import ReservationSection from '@/components/common/ReservationSection/ReservationSection'
import React from 'react'

interface RankProps {
  RankTitle: string
  RankSummary: string
  RankDate: string
  src: string
}

interface ReservationSectionProps {
  Ranks: RankProps[]
  clickEvent?: () => void
}

const Reservation = ({ Ranks, clickEvent }: ReservationSectionProps) => {
  return (
    <div>
      <Header />
      <Margin bottom={110} />
      <ReservationSection Ranks={Ranks} clickEvent={clickEvent}></ReservationSection>
      <Margin top={110} />
      <Footer />
    </div>
  )
}

export default Reservation
