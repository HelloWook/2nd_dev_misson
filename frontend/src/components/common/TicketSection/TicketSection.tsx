import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import TicketCard from '@/components/molecule/TicketCard/TicketCard'
import React from 'react'

interface TicketSectionProps {
  imgList?: string[]
}

const TicketSection = ({ imgList }: TicketSectionProps) => {
  return (
    <div>
      <Subtitle isCenter={true}>티켓 오픈 </Subtitle>
      <Margin bottom={40} />
      <TicketCard imgList={imgList} />
      <Margin bottom={130} />
    </div>
  )
}

export default TicketSection
