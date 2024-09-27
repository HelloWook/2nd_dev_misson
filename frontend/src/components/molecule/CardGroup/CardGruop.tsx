import Image from '@/components/atoms/Image/Image'
import React from 'react'
import styled from 'styled-components'

interface CardGroupProps {
  imgList?: string[]
}

const CardGroupStyle = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`

const CardGroup = ({ imgList = [] }: CardGroupProps) => {
  return (
    <CardGroupStyle>
      {imgList.map((val, idx) => (
        <Image key={idx} radius={30} width={231} height={311} src={val} />
      ))}
    </CardGroupStyle>
  )
}

export default CardGroup
