import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 290px;
  height: 32px;
  padding: 8px;
`
const InputStyled = styled.input`
  width: 90%;
  border: none;
  font-size: 14px;
  outline: none;
`

const Input = () => {
  return (
    <InputWrapper>
      <InputStyled placeholder="공연/정보를 검색합니다." />
      <SearchIcon style={{ fontSize: 24, color: 'gray' }} />
    </InputWrapper>
  )
}

export default Input
