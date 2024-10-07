import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import PerformanceHall from './PerformanceHall'

const meta: Meta<typeof PerformanceHall> = {
  component: PerformanceHall,
  title: 'PerformanceHall',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof PerformanceHall>

export const Default: Story = {
  args: {},
}
