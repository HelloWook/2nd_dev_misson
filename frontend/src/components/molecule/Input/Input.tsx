import React, { useState } from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'
import { Link, useNavigate } from 'react-router-dom'

const InputWrapper = styled.form`
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
  const [searchCommand, setSearchCommand] = useState<string>('')
  const navigate = useNavigate()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCommand(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (searchCommand.trim()) {
      navigate(`/search/${searchCommand}`)
    }
  }

  return (
    <InputWrapper onSubmit={handleSubmit}>
      <InputStyled placeholder="공연/정보를 검색합니다." onChange={handleInputChange} value={searchCommand} />
      <button type="submit" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <SearchIcon style={{ fontSize: 24, color: 'gray' }} />
      </button>
    </InputWrapper>
  )
}

export default Input
