import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout/Layout'
import MainPage from '@/pages/MainPage/MainPage'

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
        path: '',
        element: <MainPage />,
      },
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '',
        element: <MainPage />,
      },
    ],
  },
])

export default router
