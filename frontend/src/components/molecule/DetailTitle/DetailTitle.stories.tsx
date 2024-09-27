import type { Meta, StoryObj } from '@storybook/react'

import DetailTitle from './DetailTitle'

const meta: Meta<typeof DetailTitle> = {
  component: DetailTitle,
  title: 'Molecule/DetailTitle',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof DetailTitle>

export const Default: Story = {
  args: {
    title: '[얼리버드] 툴루즈 로트렉 : 몽마르트의 별',
    date: '2024.09.14 ~ 2025.03.03 마이아트뮤지엄',
  },
}
