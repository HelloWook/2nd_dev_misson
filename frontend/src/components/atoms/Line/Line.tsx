import React from 'react'
import styled from 'styled-components'

const LineStyled = styled.div`
  border-bottom: 2px dashed rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 30px 0;
`

const Line = () => {
  return <LineStyled></LineStyled>
}

export default Line
