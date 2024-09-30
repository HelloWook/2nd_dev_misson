import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import SearchPostGroup from './SearchPostGroup'

const meta: Meta<typeof SearchPostGroup> = {
  component: SearchPostGroup,
  title: 'SearchPostGroup',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof SearchPostGroup>

export const Default: Story = {
  args: {
    posts: [
      {
        SearchPostTitle: ' 즐겁다',
        SearchPostDate: '2011.11.21',
        SearchPostLocation: '집간다.',
      },
      {
        SearchPostTitle: ' 즐겁다',
        SearchPostDate: '2011.11.21',
        SearchPostLocation: '집간다.',
      },
      {
        SearchPostTitle: ' 즐겁다',
        SearchPostDate: '2011.11.21',
        SearchPostLocation: '집간다.',
      },
      {
        SearchPostTitle: ' 즐겁다',
        SearchPostDate: '2011.11.21',
        SearchPostLocation: '집간다.',
      },
      {
        SearchPostTitle: ' 즐겁다',
        SearchPostDate: '2011.11.21',
        SearchPostLocation: '집간다.',
      },
    ],
    herf: 'www.naver.com',
  },
}
