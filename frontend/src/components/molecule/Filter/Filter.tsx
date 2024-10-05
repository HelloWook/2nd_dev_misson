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
  height: 900px;
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
const genres = ['연극', '무용', '대중무용', '서양음악', '한국음악', '대중음악', '복합', '서커스마술', '뮤지컬']
const sales = ['공연예정', '공연중', '공연완료']
interface filterProps {
  changeGenre: (param: string) => void
  changeSale: (param: string) => void
  changedate: (param: string) => void
}

const Filter = ({ changeGenre, changeSale, changedate }: filterProps) => {
  // 색상 변경 상태
  const [selectedSaleStatus, setSelectedSaleStatus] = useState<number | null>(null)
  const [selectedGenreStatus, setSelectedGenreStatus] = useState<number | null>(null)

  const handleSaleStatusClick = (index: number): void => {
    setSelectedSaleStatus(index === selectedSaleStatus ? null : index)
  }

  const handleDateStatusClick = (index: number): void => {
    setSelectedGenreStatus(index === selectedGenreStatus ? null : index)
  }

  const reset = (): void => {
    setSelectedSaleStatus(null)
    setSelectedGenreStatus(null)
  }

  const search = (): void => {
    const genre = selectedGenreStatus !== null ? genres[selectedGenreStatus] : ''
    const sale = selectedSaleStatus !== null ? sales[selectedSaleStatus] : ''
    console.log(genre)
    console.log(sale)
    changeGenre(genre)
    changeSale(sale)
  }

  return (
    <FilterStlye>
      <FilterTitlteStyle>필터</FilterTitlteStyle>
      <Line />
      <FilterSubTitlteStlye>판매 상태</FilterSubTitlteStlye>
      <FilterSpaneStlye>(하나만 선택 가능)</FilterSpaneStlye>
      <FilterButtonListStlye>
        {sales.map((label, index) => (
          <li key={index}>
            <FilterButtonStlye $active={selectedSaleStatus === index} onClick={() => handleSaleStatusClick(index)}>
              {label}
            </FilterButtonStlye>
          </li>
        ))}
      </FilterButtonListStlye>
      <Line />
      <FilterSubTitlteStlye>장르 상태</FilterSubTitlteStlye>
      <FilterButtonListStlye>
        {genres.map((label, index) => (
          <li key={index}>
            <FilterButtonStlye $active={selectedGenreStatus === index} onClick={() => handleDateStatusClick(index)}>
              {label}
            </FilterButtonStlye>
          </li>
        ))}
      </FilterButtonListStlye>
      <Line />
      <FilterSubTitlteStlye>날짜</FilterSubTitlteStlye>
      <Calendar />
      <Line />
      <ButtonGroup>
        <Button width={100} ButtonSummary="초기화" variant="secondary" clickEvent={reset}></Button>
        <Button width={150} ButtonSummary="검색" variant="primary" clickEvent={search}></Button>
      </ButtonGroup>
    </FilterStlye>
  )
}

export default Filter
