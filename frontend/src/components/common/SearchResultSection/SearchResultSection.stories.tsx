import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import SearchResultSection from './SearchResultSection'

const meta: Meta<typeof SearchResultSection> = {
  component: SearchResultSection,
  title: 'ORGANIMS/SearchResultSection',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof SearchResultSection>

export const Default: Story = {
  args: {},
}
