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

const DetailTitle = ({ title, date }: DetailTitleProps) => {
  return (
    <div>
      <Title>{title}</Title>
      <DetailSpanStyle>{date}</DetailSpanStyle>
    </div>
  )
}

export default DetailTitle
