import EventInfo from '@/components/common/EvnetInfo/EvnetInfo'
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

const DetailStyle = styled.div`
  max-width: 1211px;
  margin: auto;
`

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
    </DetailStyle>
  )
}

export default Detail
