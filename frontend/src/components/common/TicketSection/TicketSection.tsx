import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import TicketCard from '@/components/molecule/TicketCard/TicketCard'
import { Performance } from '@/types/types'

import React from 'react'

interface TicketSectionProps {
  ticket?: Performance[]
}

const TicketSection = ({ ticket }: TicketSectionProps) => {
  return (
    <div>
      <Subtitle>티켓 오픈 </Subtitle>
      <Margin bottom={40} />
      <TicketCard imgList={ticket} />
      <Margin bottom={130} />
    </div>
  )
}

export default TicketSection
