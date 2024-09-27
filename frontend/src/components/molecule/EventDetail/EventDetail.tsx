import React from 'react'
import styled from 'styled-components'
import Price from '@/components/atoms/Price/Price'
import Link from '@/components/atoms/Link/Link'

interface PriceItem {
  seat: string
  price: number
}

interface EventInfoItem {
  title: string
  value: string
}

interface EventDetailProps {
  eventInfo: EventInfoItem[]
  prices: PriceItem[]
  performanceTime: string
  ticketLink: string
}

const EventDeatilSyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px;
  height: 100%;
`

const EventDetailInfoStyle = styled.div`
  width: 632px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

const EventDetailSection = styled.div`
  display: flex;
`

const EventDetailInfoTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 100px;
`

const EventDetailInfoSpan = styled.div`
  font-size: 16px;
  flex-grow: 1;
`

const EventDetail = ({ eventInfo = [], prices = [], performanceTime, ticketLink }: EventDetailProps) => {
  return (
    <EventDeatilSyled>
      <EventDetailInfoStyle>
        {eventInfo.map((info, index) => (
          <EventDetailSection key={index}>
            <EventDetailInfoTitle>{info.title}</EventDetailInfoTitle>
            <EventDetailInfoSpan>{info.value}</EventDetailInfoSpan>
          </EventDetailSection>
        ))}
        <EventDetailSection>
          <EventDetailInfoTitle>가격</EventDetailInfoTitle>
          <Price prices={prices} />
        </EventDetailSection>
      </EventDetailInfoStyle>
      <EventDetailSection>
        <EventDetailInfoTitle>공연시간</EventDetailInfoTitle>
        <EventDetailInfoSpan>{performanceTime}</EventDetailInfoSpan>
      </EventDetailSection>
      <Link href={ticketLink} padding="10">
        예매처 바로가기
      </Link>
    </EventDeatilSyled>
  )
}

export default EventDetail
