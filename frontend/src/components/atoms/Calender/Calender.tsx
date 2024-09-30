import React, { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const CalendarWrapper = styled.div`
  max-width: 350px;
  margin: 0 auto;
  text-align: center;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const MonthYear = styled.h2`
  margin: 0;
  font-size: 20px;
`

const DaysOfWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
  font-weight: bold;
  color: #8e8e93;
`

const Day = styled.div<{
  $isToday?: boolean
  $isWeekend?: boolean
  $isSelected?: boolean
  $selectedColor?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: ${(props) => (props.$isWeekend ? '#ff3b30' : '#000')};
  font-weight: ${(props) => (props.$isSelected ? 'bold' : 'normal')};
  background-color: ${(props) => (props.$isSelected ? props.$selectedColor || '#d1e7ff' : 'transparent')};
  border-radius: ${(props) => (props.$isSelected ? '50%' : 'none')};
  cursor: pointer;
  &:hover {
    background-color: #e3f2fd;
  }
`

const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`
const ButtonStyle = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`

interface CalendarProps {
  selectedColor?: string
}

const Calendar: React.FC<CalendarProps> = ({ selectedColor = '#d1e7ff' }) => {
  const today = dayjs()
  const [currentDate, setCurrentDate] = useState(today)
  const [selectedDate, setSelectedDate] = useState(today)

  const startOfMonth = currentDate.startOf('month')
  const daysInMonth = currentDate.daysInMonth()
  const startDay = startOfMonth.day()

  const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'))
  }

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'))
  }

  const handleDateSelect = (day: number) => {
    const selected = currentDate.date(day)
    setSelectedDate(selected)
    console.log(`Selected date: ${selected.format('YYYY-MM-DD')}`)
  }

  const isSameDay = (day: number) => {
    return selectedDate && selectedDate.isSame(currentDate.date(day), 'day')
  }

  return (
    <CalendarWrapper>
      <Header>
        <ButtonStyle onClick={handlePrevMonth}>
          <FiChevronLeft />
        </ButtonStyle>
        <MonthYear>{currentDate.format('YYYY.MM')}</MonthYear>
        <ButtonStyle onClick={handleNextMonth}>
          <FiChevronRight />
        </ButtonStyle>
      </Header>
      <DaysOfWeek>
        {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </DaysOfWeek>
      <DatesGrid>
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {currentMonthDays.map((day) => (
          <Day
            key={`current-${day}`}
            $isWeekend={(startDay + day - 1) % 7 === 0 || (startDay + day - 1) % 7 === 6}
            $isToday={day === today.date() && currentDate.isSame(today, 'month')}
            $isSelected={isSameDay(day)}
            $selectedColor={selectedColor}
            onClick={() => handleDateSelect(day)}
          >
            {day}
          </Day>
        ))}
      </DatesGrid>
    </CalendarWrapper>
  )
}

export default Calendar
