import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestPerformanceArray, testRecommends } from '@/Mock/Test'

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
    Perfomance: TestPerformanceArray,
  },
}
