import Margin from '@/components/atoms/Margin/Margin'
import Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'
import RecommendSection from '@/components/common/RecommedSection/RecommedSection'
import React from 'react'
import styled from 'styled-components'

interface postInfo {
  SearchPostTitle: string
  SearchPostLocation: string
  SearchPostDate: string
}

interface recommend {
  title: string
  posts: postInfo[]
}

interface RecommendProps {
  recommends: recommend[]
}

const Recommend = ({ recommends }: RecommendProps) => {
  return (
    <div>
      <Header />
      <Margin bottom={110} />
      <RecommendSection recommends={recommends} />
      <Margin top={110} />
      <Footer />
    </div>
  )
}

export default Recommend
