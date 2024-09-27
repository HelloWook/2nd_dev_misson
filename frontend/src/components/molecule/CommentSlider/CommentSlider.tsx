import Comment from '@/components/atoms/Comment/Comment'
import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

const SlideStyle = styled.div`
  .slick-prev:before,
  .slick-next:before {
    content: none;
  }
  width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const arrowStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  zIndex: 1000,
  position: 'absolute',
  top: '30%',
}

const ArrowButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #f0f0f0;
  }
`
interface SlickArrowProps {
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

interface CommentInfo {
  user: string
  rating: number
  comment: string
}

interface CommentSliderProps {
  comments: CommentInfo[]
}

const CustomPrevArrow: React.FC<SlickArrowProps> = ({ style, onClick }) => {
  return (
    <ArrowButton style={{ ...style, ...arrowStyle, left: '-9%' }} onClick={onClick}>
      <span style={{ fontSize: '30px', fontWeight: 'bold' }}>‹</span>
    </ArrowButton>
  )
}

const CustomNextArrow: React.FC<SlickArrowProps> = ({ style, onClick }) => {
  return (
    <ArrowButton style={{ ...style, ...arrowStyle, right: '-8%' }} onClick={onClick}>
      <span style={{ fontSize: '30px', fontWeight: 'bold' }}>›</span>
    </ArrowButton>
  )
}

const settings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
}

/**
 * 사용자명, 별점, 댓글 내용을 가진 객체 배열을 슬라이더로 렌더링
 * @param comments 사용자명, 별점, 댓글 내용을 가진 객체를 배열로 가진다.
 * @returns JSX.Element
 */
const CommentSlider = ({ comments = [] }: CommentSliderProps) => {
  return (
    <SlideStyle>
      <Slider {...settings}>
        {comments.map((val, idx) => (
          <Comment key={idx} user={val.user} rating={val.rating} comment={val.comment} />
        ))}
      </Slider>
    </SlideStyle>
  )
}

export default CommentSlider
