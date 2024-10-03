import Image from '@/components/atoms/Image/Image'
import React from 'react'
import styled from 'styled-components'
import { Performance } from '@/types/types'

const TicketCardStlye = styled.div`
  display: flex;
  gap: 31px;
  width: 100%;
  justify-content: center;
`

interface TicketCardProps {
  imgList?: Performance[]
}

const TicketCard = ({ imgList = [] }: TicketCardProps) => {
  return (
    <TicketCardStlye>
      {imgList
        .filter((_, idx) => idx <= 1)
        .map((x, idx) => (
          <Image key={x.mt20id} height={311} radius={30} width={530} src={x.poster} />
        ))}
    </TicketCardStlye>
  )
}
export default TicketCard
