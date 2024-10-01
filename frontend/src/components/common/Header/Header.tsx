import React from 'react'
import Input from '../../molecule/Input/Input'
import Logo from '@/components/atoms/Logo/Logo'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const HeaderItemStlye = styled.div`
  width: 1054px;
  height: 93px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderInfoItemStyle = styled.div`
  width: 472px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const HeaderUlStyle = styled.ul`
  list-style: none;
  font-size: 18px;
  display: flex;
  gap: 40px;
`

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderItemStlye>
        <HeaderInfoItemStyle>
          <Logo />
          <Input />
        </HeaderInfoItemStyle>
        <HeaderUlStyle>
          <li>홈</li>
          <li>추천</li>
          <li>랭킹</li>
          <li>시설</li>
        </HeaderUlStyle>
      </HeaderItemStlye>
    </HeaderStyle>
  )
}

export default Header
