// import { Routes, Route } from "react-router-dom"
// import Home from "./pages/Home"
// import Store from "./pages/Store"
// import Services from "./pages/Services"
// import Projects from "./pages/Projects"
// import Contact from "./pages/Contact"
// import ScrollToTop from "./components/utils/ScrollToTop"
// import { motion, AnimatePresence } from "framer-motion"
import LocationProvider from "./components/utils/LocationProvider"
import RoutesWithAnimation from "./components/utils/RoutesWithAnimation"
// import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <LocationProvider>
        <RoutesWithAnimation />
      </LocationProvider>
    </>
  )
}

export default App
