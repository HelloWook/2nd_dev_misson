import { createHashRouter } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import MainPage from '@/pages/MainPage/MainPage'
import DetailPage from '@/pages/DetailPage/DetailPage'
import React from 'react'
import SaerchPage from '@/pages/SaerchPage/SaerchPage'
import RecommendPage from '@/pages/RecommendPage/RecommendPage'
import ModalPage from '@/components/Template/ModalPage/ModalPage'
import RankingPage from '@/pages/RankingPage/RankingPage'
import PerformanceHall from './components/Template/PerformanceHall/PerformanceHall'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/detail/:postId',
        element: <DetailPage />,
      },
      {
        path: '/search/:command',
        element: <SaerchPage />,
      },
      {
        path: '/recommend',
        element: <RecommendPage />,
      },
      {
        path: '/rank',
        element: <RankingPage />,
      },
      {
        path: '/select',
        element: <ModalPage />,
      },
      {
        path: '/performanceHall',
        element: <PerformanceHall />,
      },
    ],
  },
])

export default router
