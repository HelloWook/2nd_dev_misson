import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import SearchPostGroup from './SearchPostGroup'
import { tesImgUrlArray, TestPerformanceArray } from '@/Mock/Test'

const meta: Meta<typeof SearchPostGroup> = {
  component: SearchPostGroup,
  title: 'MOLECULE/SearchPostGroup',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof SearchPostGroup>

export const Default: Story = {
  args: {
    posts: [...TestPerformanceArray],
  },
}
