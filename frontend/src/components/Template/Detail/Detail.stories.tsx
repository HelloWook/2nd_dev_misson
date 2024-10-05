import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import Detail from './Detail'
import { TestUrl } from '@/Mock/Test'

const meta: Meta<typeof Detail> = {
  component: Detail,
  title: 'Template/Detail',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Detail>

const testPrice = [
  { seat: 'Vip', price: 160000 },
  { seat: 'R석', price: 140000 },
  { seat: 'S석', price: 110000 },
  { seat: 'A석', price: 80000 },
]

const eventInfo = [
  { title: '등급', value: '8세 관람가' },
  { title: '관람시간', value: '165분' },
  { title: '출연', value: '정성화, 양준모, 민우혁, 서영주, 이정열, 정재은, 김진수 등' },
]

export const Default: Story = {
  args: {},
}
