import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import ListItem from './ListItem'

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  title: 'MOLECULE/ListItem',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof ListItem>

export const Default: Story = {
  args: {
    ListItemTitle: '반갑습니다.',
    ListItemPlace: '우리집으로 가자',
    ListItemDate: '2011. 11. 21 ~  2013. 12. 12',
  },
}
