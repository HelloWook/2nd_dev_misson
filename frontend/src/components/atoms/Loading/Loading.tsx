import React from 'react'
import load from '@/assets/logo2.png'
import Overlay from '@/components/atoms/Overlay/Overlay'
import loadingCat from '@/assets/cuteCat.gif'
import styled from 'styled-components'

const LoadingStlye = styled.img`
  width: 550px;
  height: 400px;
`
const TitleStlye = styled.h1`
  font-weight: 700;
  text-align: center;
  font-size: 70px;
`

const Loading = () => {
  return (
    <Overlay variant="white">
      <div>
        <TitleStlye>Tic Cats</TitleStlye>
        <LoadingStlye src={loadingCat}></LoadingStlye>
      </div>
    </Overlay>
  )
}

export default Loading
