import { AnimatePresence } from "framer-motion"

// eslint-disable-next-line react/prop-types
function LocationProvider({ children }) {
  return (
    <>
      <AnimatePresence>{children}</AnimatePresence>
    </>
  )
}

export default LocationProvider