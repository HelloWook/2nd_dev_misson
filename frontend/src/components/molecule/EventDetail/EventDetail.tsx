import React from 'react'
import styled from 'styled-components'
import Price from '@/components/atoms/Price/Price'
import Anchor from '@/components/atoms/Link/Anchor'

interface EventDetailProps {
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

const EventDetail = ({ rate, actor, viewTime, price, performanceTime, ticketLink }: EventDetailProps) => {
  return (
    <EventDeatilSyled>
      <EventDetailInfoStyle>
        <EventDetailInfoTitle>등급</EventDetailInfoTitle>
        <EventDetailInfoSpan>{rate}</EventDetailInfoSpan>
      </EventDetailInfoStyle>
      <EventDetailInfoStyle>
        <EventDetailInfoTitle>관람시간</EventDetailInfoTitle>
        <EventDetailInfoSpan>{viewTime}</EventDetailInfoSpan>
      </EventDetailInfoStyle>
      <EventDetailInfoStyle>
        <EventDetailInfoTitle>출연</EventDetailInfoTitle>
        <EventDetailInfoSpan>{actor}</EventDetailInfoSpan>
      </EventDetailInfoStyle>
      <EventDetailInfoStyle>
        <EventDetailInfoTitle>가격</EventDetailInfoTitle>
        <EventDetailInfoSpan>{price}</EventDetailInfoSpan>
      </EventDetailInfoStyle>
      <EventDetailInfoStyle>
        <EventDetailInfoTitle>공연시간</EventDetailInfoTitle>
        <EventDetailInfoSpan>{performanceTime}</EventDetailInfoSpan>
      </EventDetailInfoStyle>
      <Anchor href={ticketLink.relateurl} padding="10">
        예매처 바로가기
      </Anchor>
    </EventDeatilSyled>
  )
}

export default EventDetail
