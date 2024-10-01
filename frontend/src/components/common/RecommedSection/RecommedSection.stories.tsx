import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import RecommedSection from './RecommedSection'
import { testRecommends } from '@/Mock/Test'

const meta: Meta<typeof RecommedSection> = {
  component: RecommedSection,
  title: 'ORGANIMS/RecommedSection',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof RecommedSection>

export const Default: Story = {
  args: {
    recommends: testRecommends,
  },
}
