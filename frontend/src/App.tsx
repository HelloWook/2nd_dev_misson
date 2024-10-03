import GlobalStyles from '@/styles/globalStyles'
import BannerSlider from '@/components/molecule/BannerSlider/BannerSlider'
import Header from './components/common/Header/Header'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  )
}

export default App
