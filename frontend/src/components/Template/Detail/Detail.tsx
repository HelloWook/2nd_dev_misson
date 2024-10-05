import Margin from '@/components/atoms/Margin/Margin'
import EventInfo from '@/components/common/EvnetInfo/EvnetInfo'
import ReviewSection from '@/components/common/ReviewSection/ReviewSection'
import DetailNote from '@/components/molecule/DetailNote/DetailNote'
import React from 'react'
import styled from 'styled-components'
import { PerformanceDetail, CommentInfo } from '@/types/types'

interface DetailProps extends PerformanceDetail {
  comments: CommentInfo[]
  onClick: (rating: number, comment: string) => void
}

const Detail = ({
  prfnm,
  prfpdfrom,
  prfpdto,
  fcltynm,
  prfcast,
  prfruntime,
  prfage,
  pcseguidance,
  poster,
  sty,
  styurls,
  dtguidance,
  relates,
  comments,
  onClick,
}: DetailProps) => {
  return (
    <div>
      <EventInfo
        title={prfnm}
        date={`${prfpdfrom}  ~ ${prfpdto} ${fcltynm}`}
        src={poster}
        actor={prfcast}
        rate={prfage}
        viewTime={prfruntime}
        price={pcseguidance}
        performanceTime={dtguidance}
        ticketLink={relates}
      />

      <Margin top={110} />
      <DetailNote note={sty} noteSrc={styurls && poster} />
      <ReviewSection comments={comments} onClick={onClick} />
      <Margin bottom={60} />
    </div>
  )
}

export default Detail

//{<ReviewSection comments={comments} />}
