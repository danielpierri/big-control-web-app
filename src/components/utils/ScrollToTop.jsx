import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // useEffect(() => {
  //   let windowScrollTimeout = setTimeout(() => {
  //     window.scrollTo(0, 0)
  //     clearTimeout(windowScrollTimeout)
  //   }, 1)
  // }, [])

  return (null)
}

