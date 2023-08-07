import LocationProvider from "./components/utils/LocationProvider"
import RoutesWithAnimation from "./components/utils/RoutesWithAnimation"

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
