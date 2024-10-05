import Button from '@/components/atoms/Button/Button'
import React, { useState } from 'react'
import styled from 'styled-components'
import { dateType } from '@/types/types'

const ButtonGroupStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
`
// 함수 이름 레전드 ㅋㅋ
interface ButtonGroupProps {
  clickEvent?: (param: string) => void
  category?: string[]
  clickDateTypeEvent?: (param: dateType) => void
}

const ButtonGroup = ({
  clickEvent,
  category = [
    '연극',
    '무용(서양/한국)',
    '대중무용',
    '서양음악',
    '한국음악(국악)',
    '대중음악',
    '복합',
    '서커스/마술',
    '뮤지컬',
  ],
  clickDateTypeEvent,
}: ButtonGroupProps) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null)

  const handleButtonClick = (index: number, value?: string, valueDate?: dateType) => {
    setActiveButtonIndex(index)
    if (clickEvent && value) {
      clickEvent(value)
    }
    if (clickDateTypeEvent && valueDate) {
      console.log(valueDate)
      clickDateTypeEvent(valueDate)
    }
  }

  return (
    <ButtonGroupStyle>
      {category.map((label, index) => (
        <Button
          key={index}
          variant={'secondary'}
          width={130}
          height={50}
          radius={45}
          ButtonSummary={label}
          clickEvent={() => handleButtonClick(index, category[index], category[index] as dateType)}
          isActive={activeButtonIndex === index}
        />
      ))}
    </ButtonGroupStyle>
  )
}

export default ButtonGroup
