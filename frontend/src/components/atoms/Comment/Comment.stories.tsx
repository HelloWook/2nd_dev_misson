import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Comment from './Comment'

const meta: Meta<typeof Comment> = {
  component: Comment,
  title: 'Atoms/Comment',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Comment>

export const Default: Story = {
  args: {
    user: '안녕',
    rating: 5,
    comment: '정말 재밌습니다.',
  },
}
