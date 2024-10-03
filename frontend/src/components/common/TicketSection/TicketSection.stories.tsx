import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TestPerformanceArray, TestUrl } from '@/Mock/Test'

import TicketSection from './TicketSection'

const meta: Meta<typeof TicketSection> = {
  component: TicketSection,
  title: 'ORGANIMS/TicketSection',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof TicketSection>

export const Default: Story = {
  args: { ticket: TestPerformanceArray },
}
