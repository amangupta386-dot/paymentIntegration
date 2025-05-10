import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import "./App.css"
import PlatesAnimation from "./components/Plates"

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <PlatesAnimation/>
    </div>
  )
}

export default App
