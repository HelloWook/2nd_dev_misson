import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Ranking from './Ranking'
import { boxOfficeData } from '@/Mock/Test'

const meta: Meta<typeof Ranking> = {
  component: Ranking,
  title: 'Ranking',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Ranking>

export const Default: Story = {
  args: {
    boxoffieces: boxOfficeData,
  },
}
