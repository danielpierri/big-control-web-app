import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/utils/ScrollToTop"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* /bigcontrol because of GitHub Pages */}
        <Route path="/" element={ <Home />} />
        <Route path="/store" element={ <Store />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
    </>
  )
}

export default App
