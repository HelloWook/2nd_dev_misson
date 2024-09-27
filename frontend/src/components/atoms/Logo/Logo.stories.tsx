import type { Meta, StoryObj } from '@storybook/react'

import Logo from './Logo'

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: 'Atoms/Logo',
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
}
export default meta

type Story = StoryObj<typeof Logo>

export const Default: Story = {
  args: {
    width: 150,
    height: 'auto',
  },
}

export const large: Story = {
  args: {
    width: 300,
    height: 'auto',
  },
}
