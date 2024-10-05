import Image from '@/components/atoms/Image/Image'
import React from 'react'
import styled from 'styled-components'
import { Performance } from '@/types/types'
import { Link } from 'react-router-dom'

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
        .map((val, idx) => (
          <Link
            to={`/detail/${val.mt20id}`}
            key={val.mt20id}
            style={{ display: 'block', textDecoration: 'none', width: '704px' }}
          >
            <Image height={311} radius={30} width={704} src={val.poster} />
          </Link>
        ))}
    </TicketCardStlye>
  )
}
export default TicketCard
