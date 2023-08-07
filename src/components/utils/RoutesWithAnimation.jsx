import { Routes, Route, useLocation } from "react-router-dom"
import Store from "../../pages/Store"
import Services from "../../pages/Services"
import Projects from "../../pages/Projects"
import Contact from "../../pages/Contact"
import ScrollToTop from "./ScrollToTop"
import Hero from "../Hero"

function RoutesWithAnimation() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.key} >
        {/* /bigcontrol because of GitHub Pages */}
        <Route path="/" element={ <Hero />} />
        <Route path="/store" element={ <Store />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
    </>
  )
}

export default RoutesWithAnimation