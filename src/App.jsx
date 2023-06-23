import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import ScrollToTopBtn from "./components/utils/ScrollToTopBtn"

function App() {

  return (
    <div className="App">
      <ScrollToTopBtn />
      <Routes>
        {/* /bigcontrol because of GitHub Pages */}
        <Route path="/" element={ <Home />} />
        <Route path="/store" element={ <Store />} />
        <Route path="/services" element={ <Services />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>
    </div>
  )
}

export default App
