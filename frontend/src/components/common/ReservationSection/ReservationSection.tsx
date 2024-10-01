import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import ButtonGroup from '@/components/molecule/ButtonGroup/ButtonGroup'
import Rank from '@/components/molecule/Rank/Rank'
import React from 'react'
import styled from 'styled-components'

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

const ReservationStyle = styled.div`
  text-align: center;
`

const ReservationSpanStyle = styled.span`
  font-size: 16px;
`

const ReservationSection = ({ Ranks, clickEvent }: ReservationSectionProps) => {
  return (
    <ReservationStyle>
      <Subtitle>{'예매 순위'}</Subtitle>
      <Margin bottom={20} />
      <ReservationSpanStyle>‘공연’ 검색 결과를 확인해보세요</ReservationSpanStyle>
      <Margin bottom={60} />
      <ButtonGroup
        category={['전체', '뮤지컬', '콘서트', '스포츠', '전시/행사', '클래식/무용', '아동/가족', '연극']}
        clickEvent={clickEvent}
      ></ButtonGroup>
      <Margin bottom={40} />
      <Rank Ranks={Ranks}></Rank>
    </ReservationStyle>
  )
}

export default ReservationSection
