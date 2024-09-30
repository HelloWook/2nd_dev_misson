import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Calender from './Calender'

const meta: Meta<typeof Calender> = {
  component: Calender,
  title: 'Atoms/Calender',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Calender>

export const Default: Story = {
  args: {},
}
