import React from 'react'
import SearchResultSection from '@/components/common/SearchResultSection/SearchResultSection'
import Header from '@/components/common/Header/Header'
import Margin from '@/components/atoms/Margin/Margin'
import Footer from '@/components/common/Footer/Footer'

const Search = () => {
  return (
    <div>
      <Header />
      <Margin bottom={110} />
      <SearchResultSection posts={[]} herf="www.naver.com"></SearchResultSection>
      <Margin top={110} />
      <Footer />
    </div>
  )
}

export default Search
