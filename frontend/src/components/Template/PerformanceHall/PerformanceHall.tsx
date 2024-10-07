import Margin from '@/components/atoms/Margin/Margin'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import Map from '@/components/common/Map/Map'
import React from 'react'
import { PerformanceHall } from '@/types/types'
import CatImg from '@/assets/logo2.png'
import useGetPerformanceHall from '@/hooks/useGetPerformanceHall'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface PerformanceHallProps {
  PerformanceHall: PerformanceHall[]
}

const ListStlye = styled.div`
  width: 1100px;
  margin: auto;
`

const ListItemStyled = styled.div`
  padding: 28px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 20px;
  align-items: center;
  width: 1100px;
  height: 100px;
`

const ListImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`

const ListItemTitleStyled = styled.h3`
  width: 450px;
  font-size: 16px;
  font-weight: 700;
`

const ListItemPlaceStyled = styled.span`
  width: 180px;
  font-size: 14px;
  white-space: break-spaces;
`

const ListItemDateStyled = styled.span`
  width: 190px;
  font-size: 14px;
`

const PerformanceHall = () => {
  const { performanceHall } = useGetPerformanceHall()
  return (
    <ListStlye>
      <Margin top={80}></Margin>
      <Subtitle>{'주변 공연장 안내'}</Subtitle>
      <Margin bottom={40}></Margin>
      <Map performanceHalls={performanceHall}></Map>
      <Margin bottom={50}></Margin>
      <ListStlye>
        {performanceHall.map((val, idx) => (
          <Link to={val.relateurl ? val.relateurl : ''}>
            <ListItemStyled>
              <ListImage src={CatImg}></ListImage>
              <ListItemTitleStyled>{val.fcltynm}</ListItemTitleStyled>
              <ListItemPlaceStyled>{val.fcltychartr}</ListItemPlaceStyled>
              <ListItemDateStyled>{val.adres}</ListItemDateStyled>
            </ListItemStyled>
          </Link>
        ))}
      </ListStlye>
      <Margin bottom={50}></Margin>
    </ListStlye>
  )
}

export default PerformanceHall
