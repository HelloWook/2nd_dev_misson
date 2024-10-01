import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Reservation from './Reservation'

const meta: Meta<typeof Reservation> = {
  component: Reservation,
  title: 'Reservation',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Reservation>

export const Default: Story = {
  args: {},
}
