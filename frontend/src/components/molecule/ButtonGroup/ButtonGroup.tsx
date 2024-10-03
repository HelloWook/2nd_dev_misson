import Button from '@/components/atoms/Button/Button'
import React, { useState } from 'react'
import styled from 'styled-components'

const ButtonGroupStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: center;
`

interface ButtonGroupProps {
  clickEvent?: (param: string) => void
  category?: string[]
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
}: ButtonGroupProps) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null)

  const handleButtonClick = (index: number, value: string) => {
    setActiveButtonIndex(index)
    if (clickEvent) {
      clickEvent(value)
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
          clickEvent={() => handleButtonClick(index, category[index])}
          isActive={activeButtonIndex === index}
        />
      ))}
    </ButtonGroupStyle>
  )
}

export default ButtonGroup
