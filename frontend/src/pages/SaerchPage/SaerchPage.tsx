import Search from '@/components/Template/Search/Search'
import useGetPerformance from '@/hooks/useGetPerfromance'
import React from 'react'
import { useParams } from 'react-router-dom'

const SaerchPage = () => {
  const { command } = useParams<{ command?: string }>()
  const { Performances, changeGenre, changeSale, changedate, loadMore } = useGetPerformance({ rows: 9, command })
  return (
    <div>
      <Search
        searchPosts={Performances}
        changeGenre={changeGenre}
        changeSale={changeSale}
        changedate={changedate}
        command={command || ''}
        loadMore={loadMore}
      ></Search>
    </div>
  )
}

export default SaerchPage
