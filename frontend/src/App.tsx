import GlobalStyles from '@/styles/globalStyles'
import BannerSlider from '@/components/molecule/BannerSlider/BannerSlider'
import Header from './components/common/Header/Header'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <BannerSlider></BannerSlider>
    </>
  )
}

export default App
