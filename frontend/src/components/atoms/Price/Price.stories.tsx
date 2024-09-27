import type { Meta, StoryObj } from '@storybook/react'

import Price from './Price'

const meta: Meta<typeof Price> = {
  component: Price,
  title: 'Atoms/Price',
  tags: ['autodocs'],
  argTypes: {
    prices: {
      control: 'object',
    },
  },
}
export default meta

type Story = StoryObj<typeof Price>

export const Default: Story = {
  args: {
    prices: [
      { seat: 'Vip', price: 160000 },
      { seat: 'Standard', price: 120000 },
      { seat: 'Economy', price: 80000 },
      { seat: 'Balcony', price: 60000 },
    ],
  },
}
