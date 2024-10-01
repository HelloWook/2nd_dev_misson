import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { testRecommends } from '@/Mock/Test'

import Recommend from './Recommend'

const meta: Meta<typeof Recommend> = {
  component: Recommend,
  title: 'TEMPLATE/Recommend',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Recommend>

export const Default: Story = {
  args: { recommends: testRecommends },
}
