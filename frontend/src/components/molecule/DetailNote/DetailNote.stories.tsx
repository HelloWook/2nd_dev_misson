import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import DetailNote from './DetailNote'

const meta: Meta<typeof DetailNote> = {
  component: DetailNote,
  title: 'MOLECULE/DetailNote',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof DetailNote>

export const Default: Story = {
  args: {
    note: '마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구 마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구마 잘해라 어쩌구 저쩌구 저쩌구 저쩌구',
  },
}
