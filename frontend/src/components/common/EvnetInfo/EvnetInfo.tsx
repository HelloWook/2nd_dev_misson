import React from 'react'
import Image from '@/components/atoms/Image/Image'
import Line from '@/components/atoms/Line/Line'
import styled from 'styled-components'
import EventDetail from '@/components/molecule/EventDetail/EventDetail'
import DetailTitle from '@/components/molecule/DetailTitle/DetailTitle'
import Margin from '@/components/atoms/Margin/Margin'

const EventInfoStyle = styled.div`
  overflow: hidden;
`

const SectionStlye = styled.div`
  max-width: 1211px;
  margin: auto;
`

const BookSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1211px;
  margin: auto;
`
interface EventInfoProps {
  title: string
  date: string
  src: string
  rate: string
  viewTime: string
  actor: string
  price: string
  performanceTime: string
  ticketLink: {
    relatenm: string
    relateurl: string
  }
}

const EventInfo = ({ title, date, src, rate, actor, viewTime, price, performanceTime, ticketLink }: EventInfoProps) => {
  return (
    <EventInfoStyle>
      <Margin top={80} />
      <SectionStlye>
        <DetailTitle title={title} date={date} />
      </SectionStlye>
      <Line />
      <BookSectionStyle>
        <div>
          <Image width={367} height={567} src={src}></Image>
        </div>
        <div>
          <EventDetail
            rate={rate}
            actor={actor}
            viewTime={viewTime}
            price={price}
            performanceTime={performanceTime}
            ticketLink={ticketLink}
          />
        </div>
      </BookSectionStyle>
      <Line />
      <Margin bottom={50} />
    </EventInfoStyle>
  )
}

export default EventInfo
