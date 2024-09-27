import Button from '@/components/atoms/Button/Button'
import React from 'react'
import styled from 'styled-components'

const ButtonGroupStyle = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  justify-content: center;
`
interface ButtonGroup {
  clickEvent?: () => void
}

const ButtonGroup = ({ clickEvent }: ButtonGroup) => {
  return (
    <ButtonGroupStyle>
      <Button
        variant={'secondary'}
        width={130}
        height={50}
        radius={45}
        ButtonSummary={'뮤지컬'}
        clickEvent={clickEvent}
      />
      <Button
        variant={'secondary'}
        width={130}
        height={50}
        radius={45}
        ButtonSummary={'콘서트'}
        clickEvent={clickEvent}
      />
      <Button
        variant={'secondary'}
        width={130}
        height={50}
        radius={45}
        ButtonSummary={'스포츠'}
        clickEvent={clickEvent}
      />
      <Button
        variant={'secondary'}
        width={130}
        height={50}
        radius={45}
        ButtonSummary={'전시/행사'}
        clickEvent={clickEvent}
      />
      <Button
        variant={'secondary'}
        width={130}
        height={50}
        radius={45}
        ButtonSummary={'클래식/무용'}
        clickEvent={clickEvent}
      />
      <Button
        variant={'secondary'}
        width={130}
        height={50}
        radius={45}
        ButtonSummary={'아동/가족'}
        clickEvent={clickEvent}
      />
      <Button
        variant={'secondary'}
        width={130}
        height={50}
        radius={45}
        ButtonSummary={'연극'}
        clickEvent={clickEvent}
      />
    </ButtonGroupStyle>
  )
}

export default ButtonGroup
