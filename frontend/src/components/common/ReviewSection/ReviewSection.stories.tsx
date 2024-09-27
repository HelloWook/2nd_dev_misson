import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import ReviewSection from './ReviewSection'

const meta: Meta<typeof ReviewSection> = {
  component: ReviewSection,
  title: 'MOLECULE/ReviewSection',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof ReviewSection>

export const Default: Story = {
  args: {},
}
