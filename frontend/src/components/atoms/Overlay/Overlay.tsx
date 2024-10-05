import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

interface OverlayStyledProps {
  variant?: 'default' | 'white'
}

const OverlayStyled = styled.div<OverlayStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ variant }) => (variant === 'white' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.5)')};
  display: flex;
  justify-content: center;
  align-items: center;
`

interface OverlayProps {
  children: ReactNode
  variant?: 'default' | 'white'
}

const Overlay = ({ children, variant = 'default' }: OverlayProps) => {
  return <OverlayStyled variant={variant}>{children}</OverlayStyled>
}

export default Overlay
