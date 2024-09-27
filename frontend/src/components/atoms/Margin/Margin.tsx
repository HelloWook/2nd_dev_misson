import React from 'react'
import styled from 'styled-components'

interface MarginProps {
  top?: number
  bottom?: number
  left?: number
  right?: number
  children?: React.ReactNode
}

const MarginWrapper = styled.div<MarginProps>`
  margin-top: ${({ top }) => (top ? `${top}px` : '0')};
  margin-bottom: ${({ bottom }) => (bottom ? `${bottom}px` : '0')};
  margin-left: ${({ left }) => (left ? `${left}px` : '0')};
  margin-right: ${({ right }) => (right ? `${right}px` : '0')};
`

const Margin: React.FC<MarginProps> = ({ top, bottom, left, right, children }) => {
  return (
    <MarginWrapper top={top} bottom={bottom} left={left} right={right}>
      {children}
    </MarginWrapper>
  )
}

export default Margin
