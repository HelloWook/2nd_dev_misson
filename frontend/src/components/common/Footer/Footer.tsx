import React from 'react'
import styled from 'styled-components'
import Logo from '@/components/atoms/Logo/Logo'

const FooterStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 116px;
  gap: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`
const SpanStlyed = styled.div`
  font-size: 20px;
`
const Footer = () => {
  return (
    <FooterStyled>
      <Logo />
      <span>© 2024 cultruetree. All rights reserved.</span>
    </FooterStyled>
  )
}

export default Footer
