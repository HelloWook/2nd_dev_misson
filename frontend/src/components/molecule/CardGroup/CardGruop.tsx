import Image from '@/components/atoms/Image/Image'
import React from 'react'
import styled from 'styled-components'
import { Performance } from '@/types/types'

interface CardGroupProps {
  genrePost?: Performance[]
}

const CardGroupStyle = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`

const CardGroup = ({ genrePost = [] }: CardGroupProps) => {
  return (
    <CardGroupStyle>
      {genrePost.map((val, idx) => (
        <Image key={idx} radius={30} width={231} height={311} src={val.poster} />
      ))}
    </CardGroupStyle>
  )
}

export default CardGroup
