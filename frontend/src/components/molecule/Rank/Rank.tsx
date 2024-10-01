import React from 'react'
import styled from 'styled-components'
import Post from '@/components/molecule/Post/Post'
import ListItem from '@/components/atoms/ListItem/ListItem'
import Margin from '@/components/atoms/Margin/Margin'

interface Rank {
  RankTitle: string
  RankSummary: string
  RankDate: string
  src: string
}

interface RankProps {
  Ranks: Rank[]
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

const Rank = ({ Ranks = [] }: RankProps) => {
  return (
    <RankStlye>
      <TopRankStlye>
        {Ranks.slice(0, 3).map((rank, idx) => (
          <Post key={idx} postTitle={rank.RankTitle} postSummary={rank.RankSummary} src={rank.src} />
        ))}
      </TopRankStlye>
      <Margin bottom={100} />
      <div>
        {Ranks.slice(3, 11).map((rank, idx) => (
          <RanListkStyle>
            <RanListkNumberStyle>{idx + 3}</RanListkNumberStyle>
            <ListItem
              key={idx}
              ListItemTitle={rank.RankTitle}
              ListItemPlace={rank.RankSummary}
              ListItemDate={rank.RankDate}
              src={rank.src}
            />
          </RanListkStyle>
        ))}
      </div>
    </RankStlye>
  )
}

export default Rank
