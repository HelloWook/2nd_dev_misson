import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import CardGroup from './CardGruop'
import { TestUrl } from '@/Mock/Test'

const meta: Meta<typeof CardGroup> = {
  component: CardGroup,
  title: 'MOLECULE/CardGroup',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof CardGroup>

export const Default: Story = {
  args: {
    imgList: [TestUrl, TestUrl, TestUrl, TestUrl],
  },
}
