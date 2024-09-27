import Image from '@/components/atoms/Image/Image'
import React from 'react'
import styled from 'styled-components'

const TicketCardStlye = styled.div`
  display: flex;
  gap: 31px;
  width: 100%;
  justify-content: center;
`

interface TicketCardProps {
  imgList?: string[]
}

const TicketCard = ({ imgList = [] }: TicketCardProps) => {
  return (
    <TicketCardStlye>
      {imgList
        .filter((_, idx) => idx <= 1)
        .map((x, idx) => (
          <Image key={idx} height={311} radius={30} width={530} src={x} />
        ))}
    </TicketCardStlye>
  )
}
export default TicketCard
