import Margin from '@/components/atoms/Margin/Margin'
import EventInfo from '@/components/common/EvnetInfo/EvnetInfo'
import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'
import ReviewSection from '@/components/common/ReviewSection/ReviewSection'
import DetailNote from '@/components/molecule/DetailNote/DetailNote'
import React from 'react'
import styled from 'styled-components'

interface PriceItem {
  seat: string
  price: number
}

interface EventInfoItem {
  title: string
  value: string
}

interface CommentInfo {
  user: string
  rating: number
  comment: string
}

interface DetailProps {
  eventID: number
  title: string
  date: string
  src: string
  eventInfo: EventInfoItem[]
  price: PriceItem[]
  performanceTime: string
  ticketLink: string
  note: string
  noteSrc: string
  comments: CommentInfo[]
}

const DetailStyle = styled.div``

const Detail = ({
  eventID,
  title,
  date,
  src,
  eventInfo,
  price,
  performanceTime,
  ticketLink,
  note,
  noteSrc,
  comments = [],
}: DetailProps) => {
  return (
    <DetailStyle>
      <Header />
      <EventInfo
        eventID={eventID}
        title={title}
        date={date}
        src={src}
        eventInfo={eventInfo}
        price={price}
        performanceTime={performanceTime}
        ticketLink={ticketLink}
      />
      <DetailNote note={note} noteSrc={noteSrc} />
      <ReviewSection comments={comments} />
      <Margin top={110} />
      <Footer />
    </DetailStyle>
  )
}

export default Detail
