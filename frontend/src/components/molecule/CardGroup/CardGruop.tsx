import Image from '@/components/atoms/Image/Image'
import React from 'react'
import styled from 'styled-components'
import { Performance } from '@/types/types'
import { Link } from 'react-router-dom'

interface CardGroupProps {
  genrePost?: Performance[]
}

const CardGroupStyle = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
`
const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  width: 231px;
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
        genrePost.map((val, idx) => (
          <Link
            to={`/detail/${val.mt20id}`}
            key={val.mt20id}
            style={{ display: 'block', textDecoration: 'none', width: '345' }}
          >
            <Image key={idx} radius={30} width={345} height={311} src={val.poster} />
          </Link>
        ))
      )}
    </CardGroupStyle>
  )
}

export default CardGroup
