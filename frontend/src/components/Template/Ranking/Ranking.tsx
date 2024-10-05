import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import ButtonGroup from '@/components/molecule/ButtonGroup/ButtonGroup'
import Rank from '@/components/molecule/Rank/Rank'
import React from 'react'
import styled from 'styled-components'
import { BoxOffice } from '@/types/types'
import { dateType } from '@/types/types'
interface RankingProps {
  boxoffieces: BoxOffice[]
  clickEvent?: (param: string) => void
  clickDateTypeEvent?: (param: dateType) => void
}

const RankingStlye = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: auto;
`

const Ranking = ({ boxoffieces, clickDateTypeEvent, clickEvent }: RankingProps) => {
  return (
    <RankingStlye>
      <Margin bottom={80}></Margin>
      <Subtitle>{'예매 순위'}</Subtitle>
      <Margin bottom={50}></Margin>
      <span>"전체 예매 순위를 확인하세요"</span>
      <Margin bottom={50}></Margin>
      <ButtonGroup category={['day', 'week', 'month']} clickDateTypeEvent={clickDateTypeEvent}></ButtonGroup>
      <Margin bottom={50}></Margin>
      <Rank boxoffieces={boxoffieces} />
      <Margin bottom={50}></Margin>
    </RankingStlye>
  )
}

export default Ranking
