import React from 'react'
import styled from 'styled-components'
import Image from '@/components/atoms/Image/Image'

const ListItemStyled = styled.div`
  padding: 28px 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 20px;
  align-items: center;
  width: 1000px;
`
const ListItemTitleStyled = styled.h3`
  width: 450px;
  font-size: 20px;
  font-weight: 700;
`
const ListItemPlaceStyled = styled.span`
  width: 180px;
  font-size: 14px;
  white-space: break-spaces;
`
const ListItemDateStyled = styled.span`
  width: 190px;
  font-size: 14px;
`

interface ListItme {
  src: string
  ListItemTitle: string
  ListItemPlace: string
  ListItemDate: string
}

const ListItem = ({ src, ListItemTitle, ListItemPlace, ListItemDate }: ListItme) => {
  return (
    <ListItemStyled>
      <Image src={src} width={100} height={100} />
      <ListItemTitleStyled>{ListItemTitle}</ListItemTitleStyled>
      <ListItemPlaceStyled>{ListItemPlace}</ListItemPlaceStyled>
      <ListItemDateStyled>{ListItemDate}</ListItemDateStyled>
    </ListItemStyled>
  )
}

export default ListItem
