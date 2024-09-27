import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestPerformanceArray, tesImgUrlArray } from '@/Mock/Test'

import Main from './Main'

const meta: Meta<typeof Main> = {
  component: Main,
  title: 'Template/Main',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Main>

export const Default: Story = {
  args: { PerformancPost: TestPerformanceArray, RecommendPost: tesImgUrlArray, TickPost: tesImgUrlArray },
}
