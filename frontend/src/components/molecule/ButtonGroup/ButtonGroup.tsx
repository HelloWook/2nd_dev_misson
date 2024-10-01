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
  clickEvent?: () => void
  category?: string[]
}

const ButtonGroup = ({
  clickEvent,
  category = ['뮤지컬', '콘서트', '스포츠', '전시/행사', '클래식/무용', '아동/가족', '연극'],
}: ButtonGroupProps) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null)

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index)
    if (clickEvent) clickEvent()
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
          clickEvent={() => handleButtonClick(index)}
          isActive={activeButtonIndex === index}
        />
      ))}
    </ButtonGroupStyle>
  )
}

export default ButtonGroup
