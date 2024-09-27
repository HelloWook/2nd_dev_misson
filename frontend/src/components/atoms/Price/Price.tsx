import React from 'react'
import styled from 'styled-components'

const PriceStyle = styled.div`
  border-radius: 10px;
  width: 425px;
  height: 180px;
  background-color: #f2f4f8;
  font-size: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const PriceSpanStyle = styled.span`
  display: block;
`

interface SeatPrice {
  seat: string
  price: number
}

interface PriceProps {
  prices: SeatPrice[]
}

const Price = ({ prices = [] }: PriceProps) => {
  return (
    <PriceStyle>
      {prices.map((item, index) => (
        <PriceSpanStyle key={index}>
          {item.seat} {item.price.toLocaleString()}원
        </PriceSpanStyle>
      ))}
    </PriceStyle>
  )
}

export default Price
