import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  ButtonSummary?: string
  clickEvent?: () => void
  width?: number
  height?: number
  radius?: number
  variant?: 'primary' | 'secondary'
}

const ButtonStyle = styled.button<ButtonProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ radius }) => radius}px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: #8e43e7;
          color: white;
        `
      case 'secondary':
        return css`
          background-color: white;
          color: black;
          border: 1px solid rgba(0, 0, 0, 0.1);
        `
      default:
        return css`
          background-color: #8e43e7;
        `
    }
  }}
`

const Button = ({
  ButtonSummary,
  clickEvent = () => {
    alert('클릭')
  },
  width = 1200,
  height = 48,
  radius = 10,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <ButtonStyle onClick={clickEvent} width={width} height={height} radius={radius} variant={variant}>
      {ButtonSummary}
    </ButtonStyle>
  )
}

export default Button
