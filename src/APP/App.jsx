import { AboutUs } from '../Components/Container/ AboutUs/AboutUs'
import { Companys } from '../Components/Container/Companys/Companys'
import { Footer } from '../Components/Container/Footer/Footer'
import { Header } from '../Components/Container/Header/Header'
import { HotelFacilities } from '../Components/Container/HotelFacilities/HotelFacilities'
import { Location } from '../Components/Container/Location/Location'
import { Navigation } from '../Components/Container/Navigation/Navigation'
import { Testimonial } from '../Components/Container/Testimonial/Testimonial'
import { PopularHotels } from '../Components/Pure/PopularHotels/PopularHotels'
import './App.css'

function App() {


  return (
  <div className='app'>
      <Navigation />
      <Header/>
      <PopularHotels/>
      <HotelFacilities/>
      <AboutUs/>
      <Testimonial/>
      <Companys/>
      <Location/>
      <Footer/>
  </div>
  )
}

export default App