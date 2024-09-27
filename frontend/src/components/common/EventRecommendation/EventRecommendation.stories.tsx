import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import EventRecommendation from './EventRecommendation'
import { TestUrl } from '@/Mock/Test'

const meta: Meta<typeof EventRecommendation> = {
  component: EventRecommendation,
  title: 'ORGANIMS/EventRecommendation',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof EventRecommendation>

export const Default: Story = {
  args: {
    imgList: [TestUrl, TestUrl, TestUrl, TestUrl],
  },
}
