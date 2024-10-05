import React from 'react'
import Title from '@/components/atoms/Title/Title'
import styled from 'styled-components'

interface DetailTitleProps {
  title: string
  date: string
}

const DetailSpanStyle = styled.span`
  display: block;
  margin-top: 15px;
`

const DetailTitleStlye = styled.div``

const DetailTitle = ({ title, date }: DetailTitleProps) => {
  return (
    <DetailTitleStlye>
      <Title>{title}</Title>
      <DetailSpanStyle>{date}</DetailSpanStyle>
    </DetailTitleStlye>
  )
}

export default DetailTitle
