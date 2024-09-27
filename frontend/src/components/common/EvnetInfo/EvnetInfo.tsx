import React from 'react'
import Image from '@/components/atoms/Image/Image'
import Line from '@/components/atoms/Line/Line'
import styled from 'styled-components'
import EventDetail from '@/components/molecule/EventDetail/EventDetail'
import DetailTitle from '@/components/molecule/DetailTitle/DetailTitle'
import Margin from '@/components/atoms/Margin/Margin'

const EventInfoStyle = styled.div`
  max-width: 1211px;
  overflow: hidden;
`

const BookSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
`

interface PriceItem {
  seat: string
  price: number
}

interface EventInfoItem {
  title: string
  value: string
}

interface EventInfoProps {
  eventID: number
  title: string
  date: string
  src: string
  eventInfo: EventInfoItem[]
  price: PriceItem[]
  performanceTime: string
  ticketLink: string
}

/**
 * 특정 이벤트의 디테일한 정보를 확인하기 위한 컴포넌트
 * @param eventID 이벤트의 id
 * @param title 이벤트의 타이틀
 * @param date 이벤트의 날짜
 * @param src 이벤트의 정보
 * @param eventInfo 이벤트의 티켓 정보
 * @param eventInfo 이벤트의 티켓 정보
 * @param performanceTime 이벤트의 이벤트의 공연 시간
 * @param ticketLink 이벤트를 예매할 수 있는 링크
 */
const EventInfo = ({ eventID, title, date, src, eventInfo, price, performanceTime, ticketLink }: EventInfoProps) => {
  return (
    <EventInfoStyle>
      <Margin top={80} />
      <DetailTitle title={title} date={date} />
      <Line />
      <BookSectionStyle>
        <div>
          <Image width={367} height={567} src={src}></Image>
        </div>
        <div>
          <EventDetail eventInfo={eventInfo} prices={price} performanceTime={performanceTime} ticketLink={ticketLink} />
        </div>
      </BookSectionStyle>
      <Line />
      <Margin bottom={50} />
    </EventInfoStyle>
  )
}

export default EventInfo
