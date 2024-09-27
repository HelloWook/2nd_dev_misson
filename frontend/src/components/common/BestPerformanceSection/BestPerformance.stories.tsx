import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestPerformanceArray } from '@/Mock/Test'

import BestPerformance from './BestPerformance'

const meta: Meta<typeof BestPerformance> = {
  component: BestPerformance,
  title: 'ORGANIMS/BestPerformance',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof BestPerformance>

export const Default: Story = {
  args: {
    postGruop: TestPerformanceArray,
  },
}
