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

const NoPerfromanceMessageStlye = styled.span`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
`

const CardGroup = ({ genrePost = [] }: CardGroupProps) => {
  return (
    <CardGroupStyle>
      {genrePost.length === 0 ? (
        <NoPerfromanceMessageStlye>정보가 존재하지 않습니다.</NoPerfromanceMessageStlye>
      ) : (
        genrePost.map((val, idx) => <Image key={idx} radius={30} width={231} height={311} src={val.poster} />)
      )}
    </CardGroupStyle>
  )
}

export default CardGroup
