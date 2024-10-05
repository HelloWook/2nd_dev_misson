import type { Meta, StoryObj } from '@storybook/react'
const TestUrl: string = 'https://www.dollstore.co.kr/shopimages/dollstore/003001000293.jpg?1650275426'

import EvnetInfo from './EvnetInfo'
import { testEventInfo } from '@/Mock/Test'

const meta: Meta<typeof EvnetInfo> = {
  component: EvnetInfo,
  title: 'ORGANIMS/EvnetInfo',
  tags: ['autodocs'],
  argTypes: {},
}
export default meta

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

type Story = StoryObj<typeof EvnetInfo>

export const Default: Story = {
  args: {
    ...testEventInfo,
  },
}
