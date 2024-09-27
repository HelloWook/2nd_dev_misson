import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import TicketCard from './TicketCard'

const meta: Meta<typeof TicketCard> = {
  component: TicketCard,
  title: 'MOLECULE/TicketCard',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof TicketCard>

export const Default: Story = {
  args: {},
}
