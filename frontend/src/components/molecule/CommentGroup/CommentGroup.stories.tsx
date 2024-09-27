import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import CommentGroup from './CommentGroup'

const meta: Meta<typeof CommentGroup> = {
  component: CommentGroup,
  title: 'CommentGroup',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof CommentGroup>

export const Default: Story = {
  args: {},
}
