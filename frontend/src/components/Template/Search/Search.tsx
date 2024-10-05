import React from 'react'
import SearchResultSection from '@/components/common/SearchResultSection/SearchResultSection'
import Margin from '@/components/atoms/Margin/Margin'
import { Performance } from '@/types/types'

interface SearchProps {
  searchPosts: Performance[]
  changeGenre: (param: string) => void
  changeSale: (param: string) => void
  changedate: (param: string) => void
  loadMore: () => void
  command: string
}

const Search = ({ searchPosts, changeGenre, changeSale, changedate, command, loadMore }: SearchProps) => {
  return (
    <div>
      <Margin bottom={110} />
      <SearchResultSection
        command={command}
        posts={searchPosts}
        changeGenre={changeGenre}
        changeSale={changeSale}
        changedate={changedate}
        loadMore={loadMore}
      ></SearchResultSection>
      <Margin top={110} />
    </div>
  )
}

export default Search
