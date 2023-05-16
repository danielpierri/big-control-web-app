import { useEffect, useState } from "react"

export default function ScrollToTopBtn() {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowBtn(true) : setShowBtn(false)
    }

    window.addEventListener("scroll", handleScrollButtonVisibility)

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"})
  }

  return (
    <>
      {showBtn && (
        <div className={"scroll-btn__container"}>
          <button className="scroll-btn" onClick={handleScrollToTop}>
            {/* img */}CLIQUE AQUI
          </button>
        </div>
      )}
    </>
  )
}