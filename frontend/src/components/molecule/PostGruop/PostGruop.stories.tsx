import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import PostGruop from './PostGruop'
import { TestPerformanceArray } from '@/Mock/Test'

const meta: Meta<typeof PostGruop> = {
  component: PostGruop,
  title: 'MOLECULE/PostGruop',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof PostGruop>

export const Default: Story = {
  args: {
    postGruop: TestPerformanceArray,
  },
}
