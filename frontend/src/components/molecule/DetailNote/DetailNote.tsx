import Image from '@/components/atoms/Image/Image'
import Margin from '@/components/atoms/Margin/Margin'
import React from 'react'
import styled from 'styled-components'

const DetailNoteStyle = styled.div`
  text-align: center;
  display: block;
`

interface DetailNoteProps {
  /** 유의 사항에 대한 설명 텍스트 */
  note: string
  /** 유의 사항을 나타내는 이미지 소스 URL */
  noteSrc: string
}

/**
 * 유의 사항을 표시하는 컴포넌트입니다.
 *
 * @param {string} note - 디테일 페이지의 유의 사항 설명
 * @param {string} noteSrc - 유의 사항과 관련된 이미지 소스
 * @returns {JSX.Element} 유의 사항을 표시하는 컴포넌트
 */
const NoteTitleStyle = styled.h4`
  font-size: 24px;
  font-weight: bold;
`

const NoteSummaryStyle = styled.span`
  font-size: 20px;
  white-space: pre-wrap;
`

const DetailNote = ({ note, noteSrc }: DetailNoteProps): JSX.Element => {
  return (
    <DetailNoteStyle>
      <NoteTitleStyle>유의 사항</NoteTitleStyle>
      <Margin bottom={30} />
      <NoteSummaryStyle>{note}</NoteSummaryStyle>
      <Margin bottom={30} />
      <Image src={noteSrc} width={430} height={722} />
    </DetailNoteStyle>
  )
}

export default DetailNote
