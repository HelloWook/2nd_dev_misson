import Margin from '@/components/atoms/Margin/Margin'
import Overlay from '@/components/atoms/Overlay/Overlay'
import Subtitle from '@/components/atoms/Subtitle/Subtitle'
import React, { useState } from 'react'
import styled from 'styled-components'
import Post from '@/components/molecule/Post/Post'
import { testRecommendPerformanceData } from '@/Mock/Test'
import { useNavigate } from 'react-router-dom'

const ModalStyled = styled.div`
  background: white;
  max-width: 1200px;
  height: 900px;
  border-radius: 8px;
  box-shadow: inset;
  padding: 20px;
  position: relative;
  text-align: center;
`

const SpanStyle = styled.div`
  font-size: 20px;
`

const PostStlye = styled.div`
  width: 1100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  place-items: center;
`

const ButtonStlye = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  background-color: #339c33;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 16px;
  position: absolute;
  right: 4%;
`

interface ModalProps {
  closeModal: () => void
}

const Modal = ({ closeModal }: ModalProps) => {
  const navigate = useNavigate()
  const [selectedPosts, setSelectedPosts] = useState<number[]>([])

  const saveToLocalStorage = (items: number[]) => {
    const selectedGenres = items.map((index) => testRecommendPerformanceData[index].genrenm)

    localStorage.setItem('selectedGenres', JSON.stringify(selectedGenres))
  }

  const toggleSelect = (idx: number) => {
    let updatedSelection
    if (selectedPosts.includes(idx)) {
      updatedSelection = selectedPosts.filter((selectedIdx) => selectedIdx !== idx)
      setSelectedPosts(updatedSelection)
    } else {
      if (selectedPosts.length < 3) {
        updatedSelection = [...selectedPosts, idx]
        setSelectedPosts(updatedSelection)
      } else {
        alert('최대 3개의 공연만 선택할 수 있습니다.')
      }
    }
  }

  const handleSave = () => {
    if (selectedPosts.length !== 3) {
      alert('3개를 선택해주세요')
      return
    }
    saveToLocalStorage(selectedPosts)
    closeModal()
    navigate('/recommend')
  }

  return (
    <Overlay>
      <ModalStyled>
        <Margin top={30} />
        <Subtitle>{'공연 Pick🍀'}</Subtitle>
        <Margin top={20} />
        <SpanStyle>선택된 공연 3개를 선택해주세요</SpanStyle>
        <Margin top={70} />
        <PostStlye>
          {testRecommendPerformanceData.map((val, idx) => (
            <div
              key={idx}
              onClick={() => toggleSelect(idx)}
              style={{
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <Post width={'220'} postTitle={val.prfnm} src={val.poster} postSummary={val.genrenm} />
              {selectedPosts.includes(idx) && (
                <div
                  style={{
                    position: 'absolute',
                    top: '30%',
                    left: '25%',
                    fontSize: '80px',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  🍀
                </div>
              )}
            </div>
          ))}
        </PostStlye>
        <Margin top={30} />
        <ButtonStlye onClick={handleSave}>저장</ButtonStlye>
      </ModalStyled>
    </Overlay>
  )
}

export default Modal
