import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Review from './Review'

const meta: Meta<typeof Review> = {
  component: Review,
  title: 'MOLECULE/Review',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Review>

export const Default: Story = {
  args: {},
}
