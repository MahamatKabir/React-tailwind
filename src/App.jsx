
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Services from "./components/Service/Service"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
const App = () => {
  return (
    <main className="overflow-x-hidden bg-light text-dark">
     <Navbar />
     <Hero />
     <Services />
     <Banner />
     <Footer />
    </main>
  )
}

export default App
