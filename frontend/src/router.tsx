import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import MainPage from '@/pages/MainPage/MainPage'
import DetailPage from '@/pages/DetailPage/DetailPage'
import React from 'react'
import SaerchPage from '@/pages/SaerchPage/SaerchPage'

const router = createBrowserRouter([
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
    ],
  },
])

export default router
