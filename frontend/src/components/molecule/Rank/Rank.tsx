import React from 'react'
import styled from 'styled-components'
import Post from '@/components/molecule/Post/Post'
import ListItem from '@/components/atoms/ListItem/ListItem'
import Margin from '@/components/atoms/Margin/Margin'
import { BoxOffice } from '@/types/types'
import { Link } from 'react-router-dom'

interface RankProps {
  boxoffieces: BoxOffice[]
}

const RankStlye = styled.div`
  width: 1100px;
  margin: auto;
`

const TopRankStlye = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
`

const RanListkStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  justify-content: space-between;
`

const RanListkNumberStyle = styled.span`
  font-weight: 700;
  font-size: 50px;
`

const Rank = ({ boxoffieces = [] }: RankProps) => {
  return (
    <RankStlye>
      <TopRankStlye>
        {boxoffieces.slice(0, 3).map((val, idx) => (
          <Link to={`/detail/${val.mt20id}`} key={idx}>
            <Post postTitle={val.prfnm} postSummary={val.fcltynm} src={`http://www.kopis.or.kr/${val.poster}`} />
          </Link>
        ))}
      </TopRankStlye>
      <Margin bottom={100} />
      <div>
        {boxoffieces.slice(3, 11).map((val, idx) => (
          <RanListkStyle key={idx}>
            <RanListkNumberStyle>{idx + 3}</RanListkNumberStyle>
            <Link to={`/detail/${val.mt20id}`}>
              <ListItem
                ListItemTitle={val.prfnm}
                ListItemPlace={val.fcltynm}
                ListItemDate={val.prfpd}
                src={`http://www.kopis.or.kr/${val.poster}`}
              />
            </Link>
          </RanListkStyle>
        ))}
      </div>
    </RankStlye>
  )
}

export default Rank
