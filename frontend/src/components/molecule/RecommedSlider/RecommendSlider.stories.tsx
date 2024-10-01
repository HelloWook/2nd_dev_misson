import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import RecommendSlider from './RecommendSlider'

const meta: Meta<typeof RecommendSlider> = {
  component: RecommendSlider,
  title: 'MOLECULE/RecommendSlider',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof RecommendSlider>

export const Default: Story = {
  args: {
    posts: [
      { SearchPostTitle: '사랑해', SearchPostDate: '내일', SearchPostLocation: '즐겁다' },
      { SearchPostTitle: '사랑해', SearchPostDate: '내일', SearchPostLocation: '즐겁다' },
      { SearchPostTitle: '사랑해', SearchPostDate: '내일', SearchPostLocation: '즐겁다' },
      { SearchPostTitle: '사랑해', SearchPostDate: '내일', SearchPostLocation: '즐겁다' },
      { SearchPostTitle: '사랑해', SearchPostDate: '내일', SearchPostLocation: '즐겁다' },
    ],
  },
}
