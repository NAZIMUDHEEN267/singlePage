import { Navbar, Home, Footer, Analytics, Features, Dashboard, Distribution } from './components'
import './scss/main.scss'
import Control from './components/home/Control'


export default function App() {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <Dashboard />
      <Analytics />
      <Features />
      <Control />
      <Distribution />
      <Footer />
    </div>
  )
}
