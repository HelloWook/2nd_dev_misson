import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Rank from './Rank'
import { testRank } from '@/Mock/Test'

const meta: Meta<typeof Rank> = {
  component: Rank,
  title: 'Rank',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Rank>

export const Default: Story = {
  args: {
    Ranks: testRank,
  },
}
