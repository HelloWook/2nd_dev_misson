import React from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import SearchPost from '@/components/molecule/SearchPost/SearchPost'
import { Performance } from '@/types/types'
import { Link } from 'react-router-dom'

const SlideStyle = styled.div`
  .slick-prev:before,
  .slick-next:before {
    content: none;
  }
  width: 1500px;
  margin: 0 auto;
  position: relative;
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
  top: '50%',
  transform: 'translateY(-50%)',
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
  z-index: 1000;

  &:hover {
    background-color: #f0f0f0;
  }
`

interface SlickArrowProps {
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

interface RecommendSliderProps {
  Perfomance: Performance[]
}

const CustomPrevArrow: React.FC<SlickArrowProps> = ({ style, onClick }) => {
  return (
    <ArrowButton style={{ ...style, ...arrowStyle, left: '-60px' }} onClick={onClick}>
      <span style={{ fontSize: '30px', fontWeight: 'bold' }}>‹</span>
    </ArrowButton>
  )
}

const CustomNextArrow: React.FC<SlickArrowProps> = ({ style, onClick }) => {
  return (
    <ArrowButton style={{ ...style, ...arrowStyle, right: '-20px' }} onClick={onClick}>
      <span style={{ fontSize: '30px', fontWeight: 'bold' }}>›</span>
    </ArrowButton>
  )
}

const RecommendSlider = ({ Perfomance = [] }: RecommendSliderProps) => {
  const settings: Settings = {
    infinite: Perfomance.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  }

  return (
    <SlideStyle>
      <Slider {...settings}>
        {Perfomance.map((val, idx) => (
          <Link
            to={`/detail/${val.mt20id}`}
            key={val.mt20id}
            style={{ display: 'block', textDecoration: 'none', width: '704px' }}
          >
            <SearchPost
              key={idx}
              SearchPostTitle={val.prfnm}
              SearchPostLocation={val.fcltynm}
              SearchPostDate={val.genrenm}
              imageSrc={val.poster}
              width="250"
              variant="secondary"
            />
          </Link>
        ))}
      </Slider>
    </SlideStyle>
  )
}

export default RecommendSlider
