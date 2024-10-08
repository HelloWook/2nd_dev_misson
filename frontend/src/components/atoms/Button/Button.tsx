import React from 'react'
import styled, { css } from 'styled-components'

interface ButtonProps {
  ButtonSummary?: string
  clickEvent?: () => void
  width?: number
  height?: number
  radius?: number
  variant?: 'primary' | 'secondary' | 'third'
  isActive?: boolean
  value?: string
  type?: string
}

const ButtonStyle = styled.button<ButtonProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ radius }) => radius}px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  ${({ variant, isActive }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${isActive ? '#d69ffb' : '#8e43e7'};
          color: ${isActive ? '#9700fb' : 'white'};
        `
      case 'secondary':
        return css`
          background-color: ${isActive ? '#8e43e7' : 'white'};
          color: ${isActive ? 'white' : 'black'};
          border: ${isActive ? 'none' : '1px solid rgba(0, 0, 0, 0.1)'};
        `
      case 'third':
        return css`
          background-color: ${isActive ? '#8e43e7' : 'white'};
          color: ${isActive ? 'white' : 'black'};
          border: ${isActive ? 'none' : '1px solid #8e43e7'};
          width: 100%;
          font-size: 22px;
        `
      default:
        return css`
          background-: #8e43e7;
          color: white;
        `
    }
  }}
`

const Button = ({
  ButtonSummary,
  clickEvent,
  width = 120,
  height = 48,
  radius = 10,
  variant = 'primary',
  isActive = false,
  value = '',
  type,
}: ButtonProps) => {
  return (
    <ButtonStyle
      onClick={clickEvent}
      width={width}
      height={height}
      radius={radius}
      variant={variant}
      isActive={isActive}
      value={value}
      type={type}
    >
      {ButtonSummary}
    </ButtonStyle>
  )
}

export default Button
