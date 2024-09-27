import React from 'react'; 
import type { Meta, StoryObj } from '@storybook/react'
import EventDetail from './EventDetail'

const meta: Meta<typeof EventDetail> = {
  component: EventDetail,
  title: 'Molecule/EventDetail',
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ height: '600px' }}>
        <Story />
      </div>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof EventDetail>

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
  args: {
    eventInfo,
    prices: testPrice,
    performanceTime: '금 19:30 / 토 14:00, 18:30 / 일 14:00',
    ticketLink: 'https://www.naver.com',
  },
}
