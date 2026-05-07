import { MainLayout } from './layouts/MainLayout'
import Intro from './components/Intro/Intro'
import HowItWorks from './components/HowItWorks/HowItWorks'
import BusinessInfo from './components/BusinessInfo/BusinessInfo'
import Income from './components/Income/Income'
import RealDigits from './components/RealDigits/RealDigits'
import GettingStarted from './components/GettingStarted/GettingStarted'
import './App.css'

function App() {

  return (
    <MainLayout>
      <Intro/>
      <HowItWorks/>
      <BusinessInfo/>
      <Income/>
      <RealDigits/>
      <GettingStarted/>
    </MainLayout>
  )
}

export default App
