import Button from '@/components/atoms/Button/Button'
import Calendar from '@/components/atoms/Calender/Calender'
import Line from '@/components/atoms/Line/Line'
import React, { useState } from 'react'
import styled from 'styled-components'

const FilterStlye = styled.div`
  padding: 8px 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  list-style: none;
  width: 310px;
  height: 980px;
`

const FilterTitlteStyle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`

const FilterSubTitlteStlye = styled.h3`
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
`

const FilterSpaneStlye = styled.span`
  font-size: 12px;
  color: gray;
`
const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`

const FilterButtonStlye = styled.button<{ $active: boolean }>`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.$active ? '#d69ffb' : 'white')};
  color: ${(props) => (props.$active ? '#9700fb' : 'black')};
  padding: 8px;
  width: 60px;
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
  width: 80px;
  white-space: nowrap;
`

const FilterButtonListStlye = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

const Filter: React.FC = () => {
  // 색상 변경 상태
  const [selectedSaleStatus, setSelectedSaleStatus] = useState<number | null>(null)
  const [selectedDateStatus, setSelectedDateStatus] = useState<number | null>(null)
  const [selectedRegionStatus, setSelectedRegionStatus] = useState<number | null>(null)

  const handleSaleStatusClick = (index: number): void => {
    setSelectedSaleStatus(index === selectedSaleStatus ? null : index)
  }

  const handleDateStatusClick = (index: number): void => {
    setSelectedDateStatus(index === selectedDateStatus ? null : index)
  }

  const handleRegionStatusClick = (index: number): void => {
    setSelectedRegionStatus(index === selectedRegionStatus ? null : index)
  }

  return (
    <FilterStlye>
      <FilterTitlteStyle>필터</FilterTitlteStyle>
      <Line />
      <FilterSubTitlteStlye>판매 상태</FilterSubTitlteStlye>
      <FilterSpaneStlye>(하나만 선택 가능)</FilterSpaneStlye>
      <FilterButtonListStlye>
        {['장르1', '장르2', '장르3'].map((label, index) => (
          <li key={index}>
            <FilterButtonStlye $active={selectedSaleStatus === index} onClick={() => handleSaleStatusClick(index)}>
              {label}
            </FilterButtonStlye>
          </li>
        ))}
      </FilterButtonListStlye>
      <Line />
      <FilterSubTitlteStlye>판매 상태</FilterSubTitlteStlye>
      <FilterButtonListStlye>
        {['판매 중', '판매 예정', '판매 종료'].map((label, index) => (
          <li key={index}>
            <FilterButtonStlye $active={selectedDateStatus === index} onClick={() => handleDateStatusClick(index)}>
              {label}
            </FilterButtonStlye>
          </li>
        ))}
      </FilterButtonListStlye>
      <Line />
      <FilterSubTitlteStlye>날짜</FilterSubTitlteStlye>
      <Calendar />
      <Line />
      <FilterSubTitlteStlye>지역</FilterSubTitlteStlye>
      <FilterButtonListStlye>
        {['판매 중', '판매 예정', '판매 종료', '판매 중', '판매 예정'].map((label, index) => (
          <li key={index}>
            <FilterButtonStlye $active={selectedRegionStatus === index} onClick={() => handleRegionStatusClick(index)}>
              {label}
            </FilterButtonStlye>
          </li>
        ))}
      </FilterButtonListStlye>
      <Line />
      <ButtonGroup>
        <Button width={100} ButtonSummary="초기화" variant="secondary"></Button>
        <Button width={150} ButtonSummary="초기화" variant="primary"></Button>
      </ButtonGroup>
    </FilterStlye>
  )
}

export default Filter
