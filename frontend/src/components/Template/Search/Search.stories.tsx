import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Search from './Search'

const meta: Meta<typeof Search> = {
  component: Search,
  title: 'Pages/Search',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {
  args: {},
}
