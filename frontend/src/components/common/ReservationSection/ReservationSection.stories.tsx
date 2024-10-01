import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import ReservationSection from './ReservationSection'
import { testRank } from '@/Mock/Test'

const meta: Meta<typeof ReservationSection> = {
  component: ReservationSection,
  title: 'ReservationSection',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof ReservationSection>

export const Default: Story = {
  args: { Ranks: testRank },
}
