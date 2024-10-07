import React from 'react'
import Input from '../../molecule/Input/Input'
import Logo from '@/components/atoms/Logo/Logo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderStyle = styled.header`
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
`

const HeaderItemStlye = styled.div`
  max-width: 1054px;
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
  const storedGenres = localStorage.getItem('selectedGenres')
  const parsedGenres = storedGenres ? JSON.parse(storedGenres) : null
  console.log(parsedGenres)
  return (
    <HeaderStyle>
      <HeaderItemStlye>
        <HeaderInfoItemStyle>
          <Link to={''}>
            <Logo />
          </Link>
          <Input />
        </HeaderInfoItemStyle>
        <HeaderUlStyle>
          <Link to={'/'}>
            <li>홈</li>
          </Link>
          <Link to={`${parsedGenres === null ? '/select' : '/recommend'}`}>
            <li>추천</li>
          </Link>
          <Link to={'/rank'}>
            <li>랭킹</li>
          </Link>
          <Link to={'/performanceHall'}>
            <li>시설</li>
          </Link>
        </HeaderUlStyle>
      </HeaderItemStlye>
    </HeaderStyle>
  )
}

export default Header
