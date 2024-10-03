import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import Slider, { Settings } from 'react-slick'
import Banner from '@/components/atoms/Banner/Banner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import bannerImage from '@/assets/Banner2.png'
import { Performance } from '@/types/types'

interface PostGruopStyleProps {
  postGruop: Performance[]
}

const SlideStyle = styled.div`
  .slick-prev:before,
  .slick-next:before {
    content: none;
    z-index: -1;
  }
  margin-bottom: 81px;
`

interface SlickArrowProps {
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const arrowStyle: React.CSSProperties = {
  zIndex: 1000,
  position: 'absolute',
  top: '60%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
}

const CustomPrevArrow: React.FC<SlickArrowProps> = ({ style, onClick }) => {
  return (
    <button
      style={{
        ...style,
        ...arrowStyle,
        left: '0%',
      }}
      onClick={onClick}
    >
      <KeyboardArrowLeftIcon style={{ fontSize: '50px', color: 'white' }} />
    </button>
  )
}

const CustomNextArrow: React.FC<SlickArrowProps> = ({ style, onClick }) => {
  return (
    <button
      style={{
        ...style,
        ...arrowStyle,
        right: '0%',
      }}
      onClick={onClick}
    >
      <KeyboardArrowRightIcon style={{ fontSize: '50px', color: 'white' }} />
    </button>
  )
}

const settings: Settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
}

const BannerSlider = ({ postGruop }: PostGruopStyleProps) => {
  return (
    <SlideStyle>
      <Slider {...settings}>
        {postGruop.map((val, idx) => {
          return (
            <div key={idx}>
              <Banner src={val.poster} />
            </div>
          )
        })}
      </Slider>
    </SlideStyle>
  )
}

export default BannerSlider
